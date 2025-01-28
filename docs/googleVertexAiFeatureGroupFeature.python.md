# `googleVertexAiFeatureGroupFeature` Submodule <a name="`googleVertexAiFeatureGroupFeature` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureGroupFeature <a name="GoogleVertexAiFeatureGroupFeature" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature google_vertex_ai_feature_group_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_group_feature

googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feature_group: str,
  name: str,
  region: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleVertexAiFeatureGroupFeatureTimeouts = None,
  version_column_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.featureGroup">feature_group</a></code> | <code>str</code> | The name of the Feature Group. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the Feature Group Feature. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.region">region</a></code> | <code>str</code> | The region for the resource. It should be the same as the feature group's region. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the FeatureGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#id GoogleVertexAiFeatureGroupFeature#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize your FeatureGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#project GoogleVertexAiFeatureGroupFeature#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.versionColumnName">version_column_name</a></code> | <code>str</code> | The name of the BigQuery Table/View column hosting data for this version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_group`<sup>Required</sup> <a name="feature_group" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.featureGroup"></a>

- *Type:* str

The name of the Feature Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#feature_group GoogleVertexAiFeatureGroupFeature#feature_group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the Feature Group Feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#name GoogleVertexAiFeatureGroupFeature#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.region"></a>

- *Type:* str

The region for the resource. It should be the same as the feature group's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#region GoogleVertexAiFeatureGroupFeature#region}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.description"></a>

- *Type:* str

The description of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#description GoogleVertexAiFeatureGroupFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#id GoogleVertexAiFeatureGroupFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your FeatureGroup.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#labels GoogleVertexAiFeatureGroupFeature#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#project GoogleVertexAiFeatureGroupFeature#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#timeouts GoogleVertexAiFeatureGroupFeature#timeouts}

---

##### `version_column_name`<sup>Optional</sup> <a name="version_column_name" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.versionColumnName"></a>

- *Type:* str

The name of the BigQuery Table/View column hosting data for this version.

If no value is provided, will use featureId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#version_column_name GoogleVertexAiFeatureGroupFeature#version_column_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetVersionColumnName">reset_version_column_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#create GoogleVertexAiFeatureGroupFeature#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#delete GoogleVertexAiFeatureGroupFeature#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#update GoogleVertexAiFeatureGroupFeature#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version_column_name` <a name="reset_version_column_name" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetVersionColumnName"></a>

```python
def reset_version_column_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeatureGroupFeature resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_group_feature

googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_group_feature

googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_group_feature

googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_group_feature

googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVertexAiFeatureGroupFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiFeatureGroupFeature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiFeatureGroupFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureGroupFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference">GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.featureGroupInput">feature_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.versionColumnNameInput">version_column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.featureGroup">feature_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.versionColumnName">version_column_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.timeouts"></a>

```python
timeouts: GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference">GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `feature_group_input`<sup>Optional</sup> <a name="feature_group_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.featureGroupInput"></a>

```python
feature_group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleVertexAiFeatureGroupFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a>]

---

##### `version_column_name_input`<sup>Optional</sup> <a name="version_column_name_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.versionColumnNameInput"></a>

```python
version_column_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `feature_group`<sup>Required</sup> <a name="feature_group" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.featureGroup"></a>

```python
feature_group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `version_column_name`<sup>Required</sup> <a name="version_column_name" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.versionColumnName"></a>

```python
version_column_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureGroupFeatureConfig <a name="GoogleVertexAiFeatureGroupFeatureConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_group_feature

googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  feature_group: str,
  name: str,
  region: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleVertexAiFeatureGroupFeatureTimeouts = None,
  version_column_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.featureGroup">feature_group</a></code> | <code>str</code> | The name of the Feature Group. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.name">name</a></code> | <code>str</code> | The resource name of the Feature Group Feature. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.region">region</a></code> | <code>str</code> | The region for the resource. It should be the same as the feature group's region. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.description">description</a></code> | <code>str</code> | The description of the FeatureGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#id GoogleVertexAiFeatureGroupFeature#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize your FeatureGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#project GoogleVertexAiFeatureGroupFeature#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.versionColumnName">version_column_name</a></code> | <code>str</code> | The name of the BigQuery Table/View column hosting data for this version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_group`<sup>Required</sup> <a name="feature_group" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.featureGroup"></a>

```python
feature_group: str
```

- *Type:* str

The name of the Feature Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#feature_group GoogleVertexAiFeatureGroupFeature#feature_group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Feature Group Feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#name GoogleVertexAiFeatureGroupFeature#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region for the resource. It should be the same as the feature group's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#region GoogleVertexAiFeatureGroupFeature#region}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#description GoogleVertexAiFeatureGroupFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#id GoogleVertexAiFeatureGroupFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your FeatureGroup.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#labels GoogleVertexAiFeatureGroupFeature#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#project GoogleVertexAiFeatureGroupFeature#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiFeatureGroupFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#timeouts GoogleVertexAiFeatureGroupFeature#timeouts}

---

##### `version_column_name`<sup>Optional</sup> <a name="version_column_name" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.versionColumnName"></a>

```python
version_column_name: str
```

- *Type:* str

The name of the BigQuery Table/View column hosting data for this version.

If no value is provided, will use featureId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#version_column_name GoogleVertexAiFeatureGroupFeature#version_column_name}

---

### GoogleVertexAiFeatureGroupFeatureTimeouts <a name="GoogleVertexAiFeatureGroupFeatureTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_group_feature

googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#create GoogleVertexAiFeatureGroupFeature#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#delete GoogleVertexAiFeatureGroupFeature#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#update GoogleVertexAiFeatureGroupFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#create GoogleVertexAiFeatureGroupFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#delete GoogleVertexAiFeatureGroupFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_feature_group_feature#update GoogleVertexAiFeatureGroupFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference <a name="GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_feature_group_feature

googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVertexAiFeatureGroupFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a>]

---



