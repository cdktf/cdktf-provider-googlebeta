# `googleDataCatalogEntryGroupIamBinding` Submodule <a name="`googleDataCatalogEntryGroupIamBinding` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogEntryGroupIamBinding <a name="GoogleDataCatalogEntryGroupIamBinding" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding google_data_catalog_entry_group_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry_group_iam_binding

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entry_group: str,
  members: typing.List[str],
  role: str,
  condition: GoogleDataCatalogEntryGroupIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.entryGroup">entry_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#entry_group GoogleDataCatalogEntryGroupIamBinding#entry_group}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#members GoogleDataCatalogEntryGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#role GoogleDataCatalogEntryGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#id GoogleDataCatalogEntryGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#project GoogleDataCatalogEntryGroupIamBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#region GoogleDataCatalogEntryGroupIamBinding#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entry_group`<sup>Required</sup> <a name="entry_group" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.entryGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#entry_group GoogleDataCatalogEntryGroupIamBinding#entry_group}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#members GoogleDataCatalogEntryGroupIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#role GoogleDataCatalogEntryGroupIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#condition GoogleDataCatalogEntryGroupIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#id GoogleDataCatalogEntryGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#project GoogleDataCatalogEntryGroupIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#region GoogleDataCatalogEntryGroupIamBinding#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#expression GoogleDataCatalogEntryGroupIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#title GoogleDataCatalogEntryGroupIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#description GoogleDataCatalogEntryGroupIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataCatalogEntryGroupIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry_group_iam_binding

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry_group_iam_binding

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry_group_iam_binding

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry_group_iam_binding

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataCatalogEntryGroupIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataCatalogEntryGroupIamBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataCatalogEntryGroupIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogEntryGroupIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference">GoogleDataCatalogEntryGroupIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.entryGroupInput">entry_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.entryGroup">entry_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.condition"></a>

```python
condition: GoogleDataCatalogEntryGroupIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference">GoogleDataCatalogEntryGroupIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.conditionInput"></a>

```python
condition_input: GoogleDataCatalogEntryGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a>

---

##### `entry_group_input`<sup>Optional</sup> <a name="entry_group_input" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.entryGroupInput"></a>

```python
entry_group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `entry_group`<sup>Required</sup> <a name="entry_group" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.entryGroup"></a>

```python
entry_group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogEntryGroupIamBindingCondition <a name="GoogleDataCatalogEntryGroupIamBindingCondition" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry_group_iam_binding

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#expression GoogleDataCatalogEntryGroupIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#title GoogleDataCatalogEntryGroupIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#description GoogleDataCatalogEntryGroupIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#expression GoogleDataCatalogEntryGroupIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#title GoogleDataCatalogEntryGroupIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#description GoogleDataCatalogEntryGroupIamBinding#description}.

---

### GoogleDataCatalogEntryGroupIamBindingConfig <a name="GoogleDataCatalogEntryGroupIamBindingConfig" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry_group_iam_binding

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entry_group: str,
  members: typing.List[str],
  role: str,
  condition: GoogleDataCatalogEntryGroupIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.entryGroup">entry_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#entry_group GoogleDataCatalogEntryGroupIamBinding#entry_group}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#members GoogleDataCatalogEntryGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#role GoogleDataCatalogEntryGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#id GoogleDataCatalogEntryGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#project GoogleDataCatalogEntryGroupIamBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#region GoogleDataCatalogEntryGroupIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entry_group`<sup>Required</sup> <a name="entry_group" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.entryGroup"></a>

```python
entry_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#entry_group GoogleDataCatalogEntryGroupIamBinding#entry_group}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#members GoogleDataCatalogEntryGroupIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#role GoogleDataCatalogEntryGroupIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.condition"></a>

```python
condition: GoogleDataCatalogEntryGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#condition GoogleDataCatalogEntryGroupIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#id GoogleDataCatalogEntryGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#project GoogleDataCatalogEntryGroupIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_catalog_entry_group_iam_binding#region GoogleDataCatalogEntryGroupIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogEntryGroupIamBindingConditionOutputReference <a name="GoogleDataCatalogEntryGroupIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_catalog_entry_group_iam_binding

googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataCatalogEntryGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamBinding.GoogleDataCatalogEntryGroupIamBindingCondition">GoogleDataCatalogEntryGroupIamBindingCondition</a>

---



