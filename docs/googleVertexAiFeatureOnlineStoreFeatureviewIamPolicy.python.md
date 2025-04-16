# `googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy` Submodule <a name="`googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy google_vertex_ai_feature_online_store_featureview_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_policy

googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy(
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
  policy_data: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#feature_online_store GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#feature_online_store}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.featureView">feature_view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#feature_view GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#feature_view}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#policy_data GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#id GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#project GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#region GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.featureOnlineStore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#feature_online_store GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#feature_online_store}.

---

##### `feature_view`<sup>Required</sup> <a name="feature_view" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.featureView"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#feature_view GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#feature_view}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#policy_data GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#id GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#project GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#region GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_policy

googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_policy

googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_policy

googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_policy

googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.featureOnlineStoreInput">feature_online_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.featureViewInput">feature_view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.featureView">feature_view</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `feature_online_store_input`<sup>Optional</sup> <a name="feature_online_store_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.featureOnlineStoreInput"></a>

```python
feature_online_store_input: str
```

- *Type:* str

---

##### `feature_view_input`<sup>Optional</sup> <a name="feature_view_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.featureViewInput"></a>

```python
feature_view_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.featureOnlineStore"></a>

```python
feature_online_store: str
```

- *Type:* str

---

##### `feature_view`<sup>Required</sup> <a name="feature_view" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.featureView"></a>

```python
feature_view: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig <a name="GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_online_store_featureview_iam_policy

googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feature_online_store: str,
  feature_view: str,
  policy_data: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.featureOnlineStore">feature_online_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#feature_online_store GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#feature_online_store}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.featureView">feature_view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#feature_view GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#feature_view}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#policy_data GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#id GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#project GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#region GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_online_store`<sup>Required</sup> <a name="feature_online_store" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.featureOnlineStore"></a>

```python
feature_online_store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#feature_online_store GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#feature_online_store}.

---

##### `feature_view`<sup>Required</sup> <a name="feature_view" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.featureView"></a>

```python
feature_view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#feature_view GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#feature_view}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#policy_data GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#id GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#project GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreFeatureviewIamPolicy.GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.30.0/docs/resources/google_vertex_ai_feature_online_store_featureview_iam_policy#region GoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#region}.

---



