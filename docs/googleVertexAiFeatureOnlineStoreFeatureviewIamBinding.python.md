# `googleVertexAiFeatureOnlineStoreFeatureviewIamBinding` Submodule <a name="`googleVertexAiFeatureOnlineStoreFeatureviewIamBinding` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding google_vertex_ai_feature_online_store_featureview_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_binding

googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding(
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
  feature_view: str,
  members: typing.List[str],
  role: str,
  condition: GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#feature_online_store GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#feature_online_store}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.featureView">feature_view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#feature_view GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#feature_view}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#members GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#role GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition">GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#id GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#project GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#region GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.featureOnlineStore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#feature_online_store GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#feature_online_store}.

---

##### `feature_view`<sup>Required</sup> <a name="feature_view" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.featureView"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#feature_view GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#feature_view}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#members GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#role GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition">GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#condition GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#id GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#project GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#region GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#expression GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#title GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#description GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_binding

googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_binding

googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_binding

googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_binding

googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition">GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.featureOnlineStoreInput">feature_online_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.featureViewInput">feature_view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.featureView">feature_view</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.condition"></a>

```python
condition: GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference">GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.conditionInput"></a>

```python
condition_input: GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition">GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition</a>

---

##### `feature_online_store_input`<sup>Optional</sup> <a name="feature_online_store_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.featureOnlineStoreInput"></a>

```python
feature_online_store_input: str
```

- *Type:* str

---

##### `feature_view_input`<sup>Optional</sup> <a name="feature_view_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.featureViewInput"></a>

```python
feature_view_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.featureOnlineStore"></a>

```python
feature_online_store: str
```

- *Type:* str

---

##### `feature_view`<sup>Required</sup> <a name="feature_view" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.featureView"></a>

```python
feature_view: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_binding

googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#expression GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#title GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#description GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#expression GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#title GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#description GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#description}.

---

### GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_binding

googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feature_online_store: str,
  feature_view: str,
  members: typing.List[str],
  role: str,
  condition: GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#feature_online_store GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#feature_online_store}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.featureView">feature_view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#feature_view GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#feature_view}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#members GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#role GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition">GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#id GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#project GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#region GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.featureOnlineStore"></a>

```python
feature_online_store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#feature_online_store GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#feature_online_store}.

---

##### `feature_view`<sup>Required</sup> <a name="feature_view" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.featureView"></a>

```python
feature_view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#feature_view GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#feature_view}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#members GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#role GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.condition"></a>

```python
condition: GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition">GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#condition GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#id GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#project GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_binding#region GoogleVertexAiFeatureOnlineStoreFeatureviewIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_binding

googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition">GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamBinding.GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition">GoogleVertexAiFeatureOnlineStoreFeatureviewIamBindingCondition</a>

---



