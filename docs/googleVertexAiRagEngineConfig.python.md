# `googleVertexAiRagEngineConfig` Submodule <a name="`googleVertexAiRagEngineConfig` Submodule" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiRagEngineConfig <a name="GoogleVertexAiRagEngineConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config google_vertex_ai_rag_engine_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rag_managed_db_config: GoogleVertexAiRagEngineConfigRagManagedDbConfig,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiRagEngineConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.ragManagedDbConfig">rag_managed_db_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a></code> | rag_managed_db_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#id GoogleVertexAiRagEngineConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#project GoogleVertexAiRagEngineConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the RagEngineConfig. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `rag_managed_db_config`<sup>Required</sup> <a name="rag_managed_db_config" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.ragManagedDbConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

rag_managed_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#rag_managed_db_config GoogleVertexAiRagEngineConfig#rag_managed_db_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#id GoogleVertexAiRagEngineConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#project GoogleVertexAiRagEngineConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.region"></a>

- *Type:* str

The region of the RagEngineConfig. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#region GoogleVertexAiRagEngineConfig#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#timeouts GoogleVertexAiRagEngineConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putRagManagedDbConfig">put_rag_managed_db_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rag_managed_db_config` <a name="put_rag_managed_db_config" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putRagManagedDbConfig"></a>

```python
def put_rag_managed_db_config(
  basic: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic = None,
  scaled: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled = None,
  unprovisioned: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned = None
) -> None
```

###### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putRagManagedDbConfig.parameter.basic"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#basic GoogleVertexAiRagEngineConfig#basic}

---

###### `scaled`<sup>Optional</sup> <a name="scaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putRagManagedDbConfig.parameter.scaled"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

scaled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#scaled GoogleVertexAiRagEngineConfig#scaled}

---

###### `unprovisioned`<sup>Optional</sup> <a name="unprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putRagManagedDbConfig.parameter.unprovisioned"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

unprovisioned block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#unprovisioned GoogleVertexAiRagEngineConfig#unprovisioned}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#create GoogleVertexAiRagEngineConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#delete GoogleVertexAiRagEngineConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#update GoogleVertexAiRagEngineConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVertexAiRagEngineConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiRagEngineConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiRagEngineConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiRagEngineConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfig">rag_managed_db_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference">GoogleVertexAiRagEngineConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfigInput">rag_managed_db_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rag_managed_db_config`<sup>Required</sup> <a name="rag_managed_db_config" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfig"></a>

```python
rag_managed_db_config: GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiRagEngineConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference">GoogleVertexAiRagEngineConfigTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rag_managed_db_config_input`<sup>Optional</sup> <a name="rag_managed_db_config_input" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.ragManagedDbConfigInput"></a>

```python
rag_managed_db_config_input: GoogleVertexAiRagEngineConfigRagManagedDbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiRagEngineConfigTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiRagEngineConfigConfig <a name="GoogleVertexAiRagEngineConfigConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rag_managed_db_config: GoogleVertexAiRagEngineConfigRagManagedDbConfig,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiRagEngineConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.ragManagedDbConfig">rag_managed_db_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a></code> | rag_managed_db_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#id GoogleVertexAiRagEngineConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#project GoogleVertexAiRagEngineConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.region">region</a></code> | <code>str</code> | The region of the RagEngineConfig. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `rag_managed_db_config`<sup>Required</sup> <a name="rag_managed_db_config" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.ragManagedDbConfig"></a>

```python
rag_managed_db_config: GoogleVertexAiRagEngineConfigRagManagedDbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

rag_managed_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#rag_managed_db_config GoogleVertexAiRagEngineConfig#rag_managed_db_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#id GoogleVertexAiRagEngineConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#project GoogleVertexAiRagEngineConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the RagEngineConfig. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#region GoogleVertexAiRagEngineConfig#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiRagEngineConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#timeouts GoogleVertexAiRagEngineConfig#timeouts}

---

### GoogleVertexAiRagEngineConfigRagManagedDbConfig <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfig" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig(
  basic: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic = None,
  scaled: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled = None,
  unprovisioned: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.scaled">scaled</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | scaled block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned">unprovisioned</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | unprovisioned block. |

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.basic"></a>

```python
basic: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#basic GoogleVertexAiRagEngineConfig#basic}

---

##### `scaled`<sup>Optional</sup> <a name="scaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.scaled"></a>

```python
scaled: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

scaled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#scaled GoogleVertexAiRagEngineConfig#scaled}

---

##### `unprovisioned`<sup>Optional</sup> <a name="unprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig.property.unprovisioned"></a>

```python
unprovisioned: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

unprovisioned block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#unprovisioned GoogleVertexAiRagEngineConfig#unprovisioned}

---

### GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic()
```


### GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled()
```


### GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned()
```


### GoogleVertexAiRagEngineConfigTimeouts <a name="GoogleVertexAiRagEngineConfigTimeouts" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#create GoogleVertexAiRagEngineConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#delete GoogleVertexAiRagEngineConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#update GoogleVertexAiRagEngineConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#create GoogleVertexAiRagEngineConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#delete GoogleVertexAiRagEngineConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_rag_engine_config#update GoogleVertexAiRagEngineConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---


### GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic">put_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled">put_scaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned">put_unprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic">reset_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled">reset_scaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned">reset_unprovisioned</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic` <a name="put_basic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putBasic"></a>

```python
def put_basic() -> None
```

##### `put_scaled` <a name="put_scaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putScaled"></a>

```python
def put_scaled() -> None
```

##### `put_unprovisioned` <a name="put_unprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.putUnprovisioned"></a>

```python
def put_unprovisioned() -> None
```

##### `reset_basic` <a name="reset_basic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetBasic"></a>

```python
def reset_basic() -> None
```

##### `reset_scaled` <a name="reset_scaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetScaled"></a>

```python
def reset_scaled() -> None
```

##### `reset_unprovisioned` <a name="reset_unprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.resetUnprovisioned"></a>

```python
def reset_unprovisioned() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled">scaled</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned">unprovisioned</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput">basic_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput">scaled_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput">unprovisioned_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basic"></a>

```python
basic: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasicOutputReference</a>

---

##### `scaled`<sup>Required</sup> <a name="scaled" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaled"></a>

```python
scaled: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference</a>

---

##### `unprovisioned`<sup>Required</sup> <a name="unprovisioned" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisioned"></a>

```python
unprovisioned: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference</a>

---

##### `basic_input`<sup>Optional</sup> <a name="basic_input" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.basicInput"></a>

```python
basic_input: GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic">GoogleVertexAiRagEngineConfigRagManagedDbConfigBasic</a>

---

##### `scaled_input`<sup>Optional</sup> <a name="scaled_input" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.scaledInput"></a>

```python
scaled_input: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---

##### `unprovisioned_input`<sup>Optional</sup> <a name="unprovisioned_input" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.unprovisionedInput"></a>

```python
unprovisioned_input: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagEngineConfigRagManagedDbConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfig">GoogleVertexAiRagEngineConfigRagManagedDbConfig</a>

---


### GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaledOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled">GoogleVertexAiRagEngineConfigRagManagedDbConfigScaled</a>

---


### GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference <a name="GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisionedOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned">GoogleVertexAiRagEngineConfigRagManagedDbConfigUnprovisioned</a>

---


### GoogleVertexAiRagEngineConfigTimeoutsOutputReference <a name="GoogleVertexAiRagEngineConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_rag_engine_config

googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiRagEngineConfigTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiRagEngineConfig.GoogleVertexAiRagEngineConfigTimeouts">GoogleVertexAiRagEngineConfigTimeouts</a>

---



