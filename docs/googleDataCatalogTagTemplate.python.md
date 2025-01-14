# `googleDataCatalogTagTemplate` Submodule <a name="`googleDataCatalogTagTemplate` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogTagTemplate <a name="GoogleDataCatalogTagTemplate" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template google_data_catalog_tag_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fields: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFields]],
  tag_template_id: str,
  display_name: str = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleDataCatalogTagTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.fields">fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields">GoogleDataCatalogTagTemplateFields</a>]]</code> | fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.tagTemplateId">tag_template_id</a></code> | <code>str</code> | The id of the tag template to create. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for this template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This confirms the deletion of any possible tags using this template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#id GoogleDataCatalogTagTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#project GoogleDataCatalogTagTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.region">region</a></code> | <code>str</code> | Template location region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts">GoogleDataCatalogTagTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.fields"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields">GoogleDataCatalogTagTemplateFields</a>]]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#fields GoogleDataCatalogTagTemplate#fields}

---

##### `tag_template_id`<sup>Required</sup> <a name="tag_template_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.tagTemplateId"></a>

- *Type:* str

The id of the tag template to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#tag_template_id GoogleDataCatalogTagTemplate#tag_template_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#display_name GoogleDataCatalogTagTemplate#display_name}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.forceDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This confirms the deletion of any possible tags using this template.

Must be set to true in order to delete the tag template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#force_delete GoogleDataCatalogTagTemplate#force_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#id GoogleDataCatalogTagTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#project GoogleDataCatalogTagTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.region"></a>

- *Type:* str

Template location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#region GoogleDataCatalogTagTemplate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts">GoogleDataCatalogTagTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#timeouts GoogleDataCatalogTagTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fields` <a name="put_fields" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putFields"></a>

```python
def put_fields(
  value: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFields]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putFields.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields">GoogleDataCatalogTagTemplateFields</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#create GoogleDataCatalogTagTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#delete GoogleDataCatalogTagTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#update GoogleDataCatalogTagTemplate#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataCatalogTagTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataCatalogTagTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataCatalogTagTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataCatalogTagTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogTagTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList">GoogleDataCatalogTagTemplateFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference">GoogleDataCatalogTagTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fieldsInput">fields_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields">GoogleDataCatalogTagTemplateFields</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forceDeleteInput">force_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tagTemplateIdInput">tag_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts">GoogleDataCatalogTagTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tagTemplateId">tag_template_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fields"></a>

```python
fields: GoogleDataCatalogTagTemplateFieldsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList">GoogleDataCatalogTagTemplateFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.timeouts"></a>

```python
timeouts: GoogleDataCatalogTagTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference">GoogleDataCatalogTagTemplateTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.fieldsInput"></a>

```python
fields_input: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields">GoogleDataCatalogTagTemplateFields</a>]]

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forceDeleteInput"></a>

```python
force_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tag_template_id_input`<sup>Optional</sup> <a name="tag_template_id_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tagTemplateIdInput"></a>

```python
tag_template_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataCatalogTagTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts">GoogleDataCatalogTagTemplateTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tag_template_id`<sup>Required</sup> <a name="tag_template_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tagTemplateId"></a>

```python
tag_template_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogTagTemplateConfig <a name="GoogleDataCatalogTagTemplateConfig" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fields: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFields]],
  tag_template_id: str,
  display_name: str = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleDataCatalogTagTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.fields">fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields">GoogleDataCatalogTagTemplateFields</a>]]</code> | fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.tagTemplateId">tag_template_id</a></code> | <code>str</code> | The id of the tag template to create. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for this template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This confirms the deletion of any possible tags using this template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#id GoogleDataCatalogTagTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#project GoogleDataCatalogTagTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.region">region</a></code> | <code>str</code> | Template location region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts">GoogleDataCatalogTagTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.fields"></a>

```python
fields: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields">GoogleDataCatalogTagTemplateFields</a>]]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#fields GoogleDataCatalogTagTemplate#fields}

---

##### `tag_template_id`<sup>Required</sup> <a name="tag_template_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.tagTemplateId"></a>

```python
tag_template_id: str
```

- *Type:* str

The id of the tag template to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#tag_template_id GoogleDataCatalogTagTemplate#tag_template_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#display_name GoogleDataCatalogTagTemplate#display_name}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This confirms the deletion of any possible tags using this template.

Must be set to true in order to delete the tag template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#force_delete GoogleDataCatalogTagTemplate#force_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#id GoogleDataCatalogTagTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#project GoogleDataCatalogTagTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Template location region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#region GoogleDataCatalogTagTemplate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateConfig.property.timeouts"></a>

```python
timeouts: GoogleDataCatalogTagTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts">GoogleDataCatalogTagTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#timeouts GoogleDataCatalogTagTemplate#timeouts}

---

### GoogleDataCatalogTagTemplateFields <a name="GoogleDataCatalogTagTemplateFields" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields(
  field_id: str,
  type: GoogleDataCatalogTagTemplateFieldsType,
  description: str = None,
  display_name: str = None,
  is_required: typing.Union[bool, IResolvable] = None,
  order: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.fieldId">field_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#field_id GoogleDataCatalogTagTemplate#field_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.type">type</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a></code> | type block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.description">description</a></code> | <code>str</code> | A description for this field. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.displayName">display_name</a></code> | <code>str</code> | The display name for this field. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.isRequired">is_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this is a required field. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.order">order</a></code> | <code>typing.Union[int, float]</code> | The order of this field with respect to other fields in this tag template. |

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#field_id GoogleDataCatalogTagTemplate#field_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.type"></a>

```python
type: GoogleDataCatalogTagTemplateFieldsType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a>

type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#type GoogleDataCatalogTagTemplate#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.description"></a>

```python
description: str
```

- *Type:* str

A description for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#description GoogleDataCatalogTagTemplate#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#display_name GoogleDataCatalogTagTemplate#display_name}

---

##### `is_required`<sup>Optional</sup> <a name="is_required" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.isRequired"></a>

```python
is_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this is a required field. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#is_required GoogleDataCatalogTagTemplate#is_required}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The order of this field with respect to other fields in this tag template.

A higher value indicates a more important field. The value can be negative.
Multiple fields can have the same order, and field orders within a tag do not have to be sequential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#order GoogleDataCatalogTagTemplate#order}

---

### GoogleDataCatalogTagTemplateFieldsType <a name="GoogleDataCatalogTagTemplateFieldsType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType(
  enum_type: GoogleDataCatalogTagTemplateFieldsTypeEnumType = None,
  primitive_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType.property.enumType">enum_type</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a></code> | enum_type block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType.property.primitiveType">primitive_type</a></code> | <code>str</code> | Represents primitive types - string, bool etc. |

---

##### `enum_type`<sup>Optional</sup> <a name="enum_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType.property.enumType"></a>

```python
enum_type: GoogleDataCatalogTagTemplateFieldsTypeEnumType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a>

enum_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#enum_type GoogleDataCatalogTagTemplate#enum_type}

---

##### `primitive_type`<sup>Optional</sup> <a name="primitive_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType.property.primitiveType"></a>

```python
primitive_type: str
```

- *Type:* str

Represents primitive types - string, bool etc.

Exactly one of 'primitive_type' or 'enum_type' must be set Possible values: ["DOUBLE", "STRING", "BOOL", "TIMESTAMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#primitive_type GoogleDataCatalogTagTemplate#primitive_type}

---

### GoogleDataCatalogTagTemplateFieldsTypeEnumType <a name="GoogleDataCatalogTagTemplateFieldsTypeEnumType" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType(
  allowed_values: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType.property.allowedValues">allowed_values</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>]]</code> | allowed_values block. |

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType.property.allowedValues"></a>

```python
allowed_values: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>]]

allowed_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#allowed_values GoogleDataCatalogTagTemplate#allowed_values}

---

### GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues <a name="GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues(
  display_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.property.displayName">display_name</a></code> | <code>str</code> | The display name of the enum value. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#display_name GoogleDataCatalogTagTemplate#display_name}

---

### GoogleDataCatalogTagTemplateTimeouts <a name="GoogleDataCatalogTagTemplateTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#create GoogleDataCatalogTagTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#delete GoogleDataCatalogTagTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#update GoogleDataCatalogTagTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#create GoogleDataCatalogTagTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#delete GoogleDataCatalogTagTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#update GoogleDataCatalogTagTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogTagTemplateFieldsList <a name="GoogleDataCatalogTagTemplateFieldsList" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataCatalogTagTemplateFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields">GoogleDataCatalogTagTemplateFields</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields">GoogleDataCatalogTagTemplateFields</a>]]

---


### GoogleDataCatalogTagTemplateFieldsOutputReference <a name="GoogleDataCatalogTagTemplateFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.putType">put_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetIsRequired">reset_is_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetOrder">reset_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_type` <a name="put_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.putType"></a>

```python
def put_type(
  enum_type: GoogleDataCatalogTagTemplateFieldsTypeEnumType = None,
  primitive_type: str = None
) -> None
```

###### `enum_type`<sup>Optional</sup> <a name="enum_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.putType.parameter.enumType"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a>

enum_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#enum_type GoogleDataCatalogTagTemplate#enum_type}

---

###### `primitive_type`<sup>Optional</sup> <a name="primitive_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.putType.parameter.primitiveType"></a>

- *Type:* str

Represents primitive types - string, bool etc.

Exactly one of 'primitive_type' or 'enum_type' must be set Possible values: ["DOUBLE", "STRING", "BOOL", "TIMESTAMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#primitive_type GoogleDataCatalogTagTemplate#primitive_type}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_is_required` <a name="reset_is_required" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetIsRequired"></a>

```python
def reset_is_required() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.type">type</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference">GoogleDataCatalogTagTemplateFieldsTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fieldIdInput">field_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.isRequiredInput">is_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.typeInput">type_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fieldId">field_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.isRequired">is_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields">GoogleDataCatalogTagTemplateFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.type"></a>

```python
type: GoogleDataCatalogTagTemplateFieldsTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference">GoogleDataCatalogTagTemplateFieldsTypeOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `field_id_input`<sup>Optional</sup> <a name="field_id_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fieldIdInput"></a>

```python
field_id_input: str
```

- *Type:* str

---

##### `is_required_input`<sup>Optional</sup> <a name="is_required_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.isRequiredInput"></a>

```python
is_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.typeInput"></a>

```python
type_input: GoogleDataCatalogTagTemplateFieldsType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.fieldId"></a>

```python
field_id: str
```

- *Type:* str

---

##### `is_required`<sup>Required</sup> <a name="is_required" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.isRequired"></a>

```python
is_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataCatalogTagTemplateFields]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFields">GoogleDataCatalogTagTemplateFields</a>]

---


### GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList <a name="GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>]]

---


### GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference <a name="GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>]

---


### GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference <a name="GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues">put_allowed_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_values` <a name="put_allowed_values" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues"></a>

```python
def put_allowed_values(
  value: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.putAllowedValues.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValues">allowed_values</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValuesInput">allowed_values_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValues"></a>

```python
allowed_values: GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList</a>

---

##### `allowed_values_input`<sup>Optional</sup> <a name="allowed_values_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.allowedValuesInput"></a>

```python
allowed_values_input: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataCatalogTagTemplateFieldsTypeEnumType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a>

---


### GoogleDataCatalogTagTemplateFieldsTypeOutputReference <a name="GoogleDataCatalogTagTemplateFieldsTypeOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.putEnumType">put_enum_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resetEnumType">reset_enum_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resetPrimitiveType">reset_primitive_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_enum_type` <a name="put_enum_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.putEnumType"></a>

```python
def put_enum_type(
  allowed_values: typing.Union[IResolvable, typing.List[GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues]]
) -> None
```

###### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.putEnumType.parameter.allowedValues"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues</a>]]

allowed_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_data_catalog_tag_template#allowed_values GoogleDataCatalogTagTemplate#allowed_values}

---

##### `reset_enum_type` <a name="reset_enum_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resetEnumType"></a>

```python
def reset_enum_type() -> None
```

##### `reset_primitive_type` <a name="reset_primitive_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.resetPrimitiveType"></a>

```python
def reset_primitive_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.enumType">enum_type</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.enumTypeInput">enum_type_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveTypeInput">primitive_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveType">primitive_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enum_type`<sup>Required</sup> <a name="enum_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.enumType"></a>

```python
enum_type: GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference">GoogleDataCatalogTagTemplateFieldsTypeEnumTypeOutputReference</a>

---

##### `enum_type_input`<sup>Optional</sup> <a name="enum_type_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.enumTypeInput"></a>

```python
enum_type_input: GoogleDataCatalogTagTemplateFieldsTypeEnumType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeEnumType">GoogleDataCatalogTagTemplateFieldsTypeEnumType</a>

---

##### `primitive_type_input`<sup>Optional</sup> <a name="primitive_type_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveTypeInput"></a>

```python
primitive_type_input: str
```

- *Type:* str

---

##### `primitive_type`<sup>Required</sup> <a name="primitive_type" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.primitiveType"></a>

```python
primitive_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsTypeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataCatalogTagTemplateFieldsType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateFieldsType">GoogleDataCatalogTagTemplateFieldsType</a>

---


### GoogleDataCatalogTagTemplateTimeoutsOutputReference <a name="GoogleDataCatalogTagTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_tag_template

googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts">GoogleDataCatalogTagTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataCatalogTagTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataCatalogTagTemplate.GoogleDataCatalogTagTemplateTimeouts">GoogleDataCatalogTagTemplateTimeouts</a>]

---



