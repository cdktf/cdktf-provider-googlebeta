# `googleDataplexDatascanIamMember` Submodule <a name="`googleDataplexDatascanIamMember` Submodule" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexDatascanIamMember <a name="GoogleDataplexDatascanIamMember" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member google_dataplex_datascan_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan_iam_member

googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_scan_id: str,
  member: str,
  role: str,
  condition: GoogleDataplexDatascanIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.dataScanId">data_scan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#data_scan_id GoogleDataplexDatascanIamMember#data_scan_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#member GoogleDataplexDatascanIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#role GoogleDataplexDatascanIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition">GoogleDataplexDatascanIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#id GoogleDataplexDatascanIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#location GoogleDataplexDatascanIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#project GoogleDataplexDatascanIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_scan_id`<sup>Required</sup> <a name="data_scan_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.dataScanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#data_scan_id GoogleDataplexDatascanIamMember#data_scan_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#member GoogleDataplexDatascanIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#role GoogleDataplexDatascanIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition">GoogleDataplexDatascanIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#condition GoogleDataplexDatascanIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#id GoogleDataplexDatascanIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#location GoogleDataplexDatascanIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#project GoogleDataplexDatascanIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#expression GoogleDataplexDatascanIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#title GoogleDataplexDatascanIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#description GoogleDataplexDatascanIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataplexDatascanIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan_iam_member

googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan_iam_member

googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan_iam_member

googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan_iam_member

googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataplexDatascanIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataplexDatascanIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataplexDatascanIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexDatascanIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference">GoogleDataplexDatascanIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition">GoogleDataplexDatascanIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.dataScanIdInput">data_scan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.dataScanId">data_scan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.condition"></a>

```python
condition: GoogleDataplexDatascanIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference">GoogleDataplexDatascanIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.conditionInput"></a>

```python
condition_input: GoogleDataplexDatascanIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition">GoogleDataplexDatascanIamMemberCondition</a>

---

##### `data_scan_id_input`<sup>Optional</sup> <a name="data_scan_id_input" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.dataScanIdInput"></a>

```python
data_scan_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `data_scan_id`<sup>Required</sup> <a name="data_scan_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.dataScanId"></a>

```python
data_scan_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexDatascanIamMemberCondition <a name="GoogleDataplexDatascanIamMemberCondition" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan_iam_member

googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#expression GoogleDataplexDatascanIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#title GoogleDataplexDatascanIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#description GoogleDataplexDatascanIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#expression GoogleDataplexDatascanIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#title GoogleDataplexDatascanIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#description GoogleDataplexDatascanIamMember#description}.

---

### GoogleDataplexDatascanIamMemberConfig <a name="GoogleDataplexDatascanIamMemberConfig" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan_iam_member

googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_scan_id: str,
  member: str,
  role: str,
  condition: GoogleDataplexDatascanIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.dataScanId">data_scan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#data_scan_id GoogleDataplexDatascanIamMember#data_scan_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#member GoogleDataplexDatascanIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#role GoogleDataplexDatascanIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition">GoogleDataplexDatascanIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#id GoogleDataplexDatascanIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#location GoogleDataplexDatascanIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#project GoogleDataplexDatascanIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_scan_id`<sup>Required</sup> <a name="data_scan_id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.dataScanId"></a>

```python
data_scan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#data_scan_id GoogleDataplexDatascanIamMember#data_scan_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#member GoogleDataplexDatascanIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#role GoogleDataplexDatascanIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.condition"></a>

```python
condition: GoogleDataplexDatascanIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition">GoogleDataplexDatascanIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#condition GoogleDataplexDatascanIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#id GoogleDataplexDatascanIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#location GoogleDataplexDatascanIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_dataplex_datascan_iam_member#project GoogleDataplexDatascanIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexDatascanIamMemberConditionOutputReference <a name="GoogleDataplexDatascanIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_datascan_iam_member

googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition">GoogleDataplexDatascanIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexDatascanIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascanIamMember.GoogleDataplexDatascanIamMemberCondition">GoogleDataplexDatascanIamMemberCondition</a>

---



