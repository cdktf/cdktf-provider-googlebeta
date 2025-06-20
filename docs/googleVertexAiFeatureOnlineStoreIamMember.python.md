# `googleVertexAiFeatureOnlineStoreIamMember` Submodule <a name="`googleVertexAiFeatureOnlineStoreIamMember` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureOnlineStoreIamMember <a name="GoogleVertexAiFeatureOnlineStoreIamMember" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member google_vertex_ai_feature_online_store_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_iam_member

googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feature_online_store: str,
  member: str,
  role: str,
  condition: GoogleVertexAiFeatureOnlineStoreIamMemberCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#feature_online_store GoogleVertexAiFeatureOnlineStoreIamMember#feature_online_store}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#member GoogleVertexAiFeatureOnlineStoreIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#role GoogleVertexAiFeatureOnlineStoreIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition">GoogleVertexAiFeatureOnlineStoreIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#id GoogleVertexAiFeatureOnlineStoreIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#project GoogleVertexAiFeatureOnlineStoreIamMember#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#region GoogleVertexAiFeatureOnlineStoreIamMember#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.featureOnlineStore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#feature_online_store GoogleVertexAiFeatureOnlineStoreIamMember#feature_online_store}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#member GoogleVertexAiFeatureOnlineStoreIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#role GoogleVertexAiFeatureOnlineStoreIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition">GoogleVertexAiFeatureOnlineStoreIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#condition GoogleVertexAiFeatureOnlineStoreIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#id GoogleVertexAiFeatureOnlineStoreIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#project GoogleVertexAiFeatureOnlineStoreIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#region GoogleVertexAiFeatureOnlineStoreIamMember#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#expression GoogleVertexAiFeatureOnlineStoreIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#title GoogleVertexAiFeatureOnlineStoreIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#description GoogleVertexAiFeatureOnlineStoreIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_iam_member

googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_iam_member

googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_iam_member

googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_iam_member

googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiFeatureOnlineStoreIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiFeatureOnlineStoreIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureOnlineStoreIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference">GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition">GoogleVertexAiFeatureOnlineStoreIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.featureOnlineStoreInput">feature_online_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.condition"></a>

```python
condition: GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference">GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.conditionInput"></a>

```python
condition_input: GoogleVertexAiFeatureOnlineStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition">GoogleVertexAiFeatureOnlineStoreIamMemberCondition</a>

---

##### `feature_online_store_input`<sup>Optional</sup> <a name="feature_online_store_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.featureOnlineStoreInput"></a>

```python
feature_online_store_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.featureOnlineStore"></a>

```python
feature_online_store: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureOnlineStoreIamMemberCondition <a name="GoogleVertexAiFeatureOnlineStoreIamMemberCondition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_iam_member

googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#expression GoogleVertexAiFeatureOnlineStoreIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#title GoogleVertexAiFeatureOnlineStoreIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#description GoogleVertexAiFeatureOnlineStoreIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#expression GoogleVertexAiFeatureOnlineStoreIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#title GoogleVertexAiFeatureOnlineStoreIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#description GoogleVertexAiFeatureOnlineStoreIamMember#description}.

---

### GoogleVertexAiFeatureOnlineStoreIamMemberConfig <a name="GoogleVertexAiFeatureOnlineStoreIamMemberConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_iam_member

googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feature_online_store: str,
  member: str,
  role: str,
  condition: GoogleVertexAiFeatureOnlineStoreIamMemberCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#feature_online_store GoogleVertexAiFeatureOnlineStoreIamMember#feature_online_store}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#member GoogleVertexAiFeatureOnlineStoreIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#role GoogleVertexAiFeatureOnlineStoreIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition">GoogleVertexAiFeatureOnlineStoreIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#id GoogleVertexAiFeatureOnlineStoreIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#project GoogleVertexAiFeatureOnlineStoreIamMember#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#region GoogleVertexAiFeatureOnlineStoreIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.featureOnlineStore"></a>

```python
feature_online_store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#feature_online_store GoogleVertexAiFeatureOnlineStoreIamMember#feature_online_store}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#member GoogleVertexAiFeatureOnlineStoreIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#role GoogleVertexAiFeatureOnlineStoreIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.condition"></a>

```python
condition: GoogleVertexAiFeatureOnlineStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition">GoogleVertexAiFeatureOnlineStoreIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#condition GoogleVertexAiFeatureOnlineStoreIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#id GoogleVertexAiFeatureOnlineStoreIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#project GoogleVertexAiFeatureOnlineStoreIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_online_store_iam_member#region GoogleVertexAiFeatureOnlineStoreIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference <a name="GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_iam_member

googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition">GoogleVertexAiFeatureOnlineStoreIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiFeatureOnlineStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamMember.GoogleVertexAiFeatureOnlineStoreIamMemberCondition">GoogleVertexAiFeatureOnlineStoreIamMemberCondition</a>

---



