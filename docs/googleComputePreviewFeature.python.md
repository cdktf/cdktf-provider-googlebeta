# `googleComputePreviewFeature` Submodule <a name="`googleComputePreviewFeature` Submodule" id="@cdktf/provider-google-beta.googleComputePreviewFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePreviewFeature <a name="GoogleComputePreviewFeature" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature google_compute_preview_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeature(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  activation_status: str,
  name: str,
  id: str = None,
  project: str = None,
  rollout_operation: GoogleComputePreviewFeatureRolloutOperation = None,
  timeouts: GoogleComputePreviewFeatureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.activationStatus">activation_status</a></code> | <code>str</code> | The activation status of the preview feature. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the preview feature. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#id GoogleComputePreviewFeature#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#project GoogleComputePreviewFeature#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.rolloutOperation">rollout_operation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `activation_status`<sup>Required</sup> <a name="activation_status" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.activationStatus"></a>

- *Type:* str

The activation status of the preview feature. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#activation_status GoogleComputePreviewFeature#activation_status}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.name"></a>

- *Type:* str

The name of the preview feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#name GoogleComputePreviewFeature#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#id GoogleComputePreviewFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#project GoogleComputePreviewFeature#project}.

---

##### `rollout_operation`<sup>Optional</sup> <a name="rollout_operation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.rolloutOperation"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#rollout_operation GoogleComputePreviewFeature#rollout_operation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#timeouts GoogleComputePreviewFeature#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putRolloutOperation">put_rollout_operation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetRolloutOperation">reset_rollout_operation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rollout_operation` <a name="put_rollout_operation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putRolloutOperation"></a>

```python
def put_rollout_operation(
  rollout_input: GoogleComputePreviewFeatureRolloutOperationRolloutInput = None
) -> None
```

###### `rollout_input`<sup>Optional</sup> <a name="rollout_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putRolloutOperation.parameter.rolloutInput"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#rollout_input GoogleComputePreviewFeature#rollout_input}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#create GoogleComputePreviewFeature#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#delete GoogleComputePreviewFeature#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#update GoogleComputePreviewFeature#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rollout_operation` <a name="reset_rollout_operation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetRolloutOperation"></a>

```python
def reset_rollout_operation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputePreviewFeature resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeature.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputePreviewFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputePreviewFeature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputePreviewFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputePreviewFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperation">rollout_operation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference">GoogleComputePreviewFeatureRolloutOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference">GoogleComputePreviewFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatusInput">activation_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperationInput">rollout_operation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatus">activation_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rollout_operation`<sup>Required</sup> <a name="rollout_operation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperation"></a>

```python
rollout_operation: GoogleComputePreviewFeatureRolloutOperationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference">GoogleComputePreviewFeatureRolloutOperationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeouts"></a>

```python
timeouts: GoogleComputePreviewFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference">GoogleComputePreviewFeatureTimeoutsOutputReference</a>

---

##### `activation_status_input`<sup>Optional</sup> <a name="activation_status_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatusInput"></a>

```python
activation_status_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rollout_operation_input`<sup>Optional</sup> <a name="rollout_operation_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperationInput"></a>

```python
rollout_operation_input: GoogleComputePreviewFeatureRolloutOperation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputePreviewFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a>]

---

##### `activation_status`<sup>Required</sup> <a name="activation_status" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatus"></a>

```python
activation_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePreviewFeatureConfig <a name="GoogleComputePreviewFeatureConfig" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeatureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  activation_status: str,
  name: str,
  id: str = None,
  project: str = None,
  rollout_operation: GoogleComputePreviewFeatureRolloutOperation = None,
  timeouts: GoogleComputePreviewFeatureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.activationStatus">activation_status</a></code> | <code>str</code> | The activation status of the preview feature. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.name">name</a></code> | <code>str</code> | The name of the preview feature. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#id GoogleComputePreviewFeature#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#project GoogleComputePreviewFeature#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.rolloutOperation">rollout_operation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `activation_status`<sup>Required</sup> <a name="activation_status" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.activationStatus"></a>

```python
activation_status: str
```

- *Type:* str

The activation status of the preview feature. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#activation_status GoogleComputePreviewFeature#activation_status}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the preview feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#name GoogleComputePreviewFeature#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#id GoogleComputePreviewFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#project GoogleComputePreviewFeature#project}.

---

##### `rollout_operation`<sup>Optional</sup> <a name="rollout_operation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.rolloutOperation"></a>

```python
rollout_operation: GoogleComputePreviewFeatureRolloutOperation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#rollout_operation GoogleComputePreviewFeature#rollout_operation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.timeouts"></a>

```python
timeouts: GoogleComputePreviewFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#timeouts GoogleComputePreviewFeature#timeouts}

---

### GoogleComputePreviewFeatureRolloutOperation <a name="GoogleComputePreviewFeatureRolloutOperation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation(
  rollout_input: GoogleComputePreviewFeatureRolloutOperationRolloutInput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation.property.rolloutInput">rollout_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a></code> | rollout_input block. |

---

##### `rollout_input`<sup>Optional</sup> <a name="rollout_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation.property.rolloutInput"></a>

```python
rollout_input: GoogleComputePreviewFeatureRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#rollout_input GoogleComputePreviewFeature#rollout_input}

---

### GoogleComputePreviewFeatureRolloutOperationRolloutInput <a name="GoogleComputePreviewFeatureRolloutOperationRolloutInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput(
  predefined_rollout_plan: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput.property.predefinedRolloutPlan">predefined_rollout_plan</a></code> | <code>str</code> | Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"]. |

---

##### `predefined_rollout_plan`<sup>Required</sup> <a name="predefined_rollout_plan" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput.property.predefinedRolloutPlan"></a>

```python
predefined_rollout_plan: str
```

- *Type:* str

Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#predefined_rollout_plan GoogleComputePreviewFeature#predefined_rollout_plan}

---

### GoogleComputePreviewFeatureTimeouts <a name="GoogleComputePreviewFeatureTimeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#create GoogleComputePreviewFeature#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#delete GoogleComputePreviewFeature#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#update GoogleComputePreviewFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#create GoogleComputePreviewFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#delete GoogleComputePreviewFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#update GoogleComputePreviewFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePreviewFeatureRolloutOperationOutputReference <a name="GoogleComputePreviewFeatureRolloutOperationOutputReference" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput">put_rollout_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resetRolloutInput">reset_rollout_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rollout_input` <a name="put_rollout_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput"></a>

```python
def put_rollout_input(
  predefined_rollout_plan: str
) -> None
```

###### `predefined_rollout_plan`<sup>Required</sup> <a name="predefined_rollout_plan" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput.parameter.predefinedRolloutPlan"></a>

- *Type:* str

Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_preview_feature#predefined_rollout_plan GoogleComputePreviewFeature#predefined_rollout_plan}

---

##### `reset_rollout_input` <a name="reset_rollout_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resetRolloutInput"></a>

```python
def reset_rollout_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInput">rollout_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference">GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInputInput">rollout_input_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rollout_input`<sup>Required</sup> <a name="rollout_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInput"></a>

```python
rollout_input: GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference">GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference</a>

---

##### `rollout_input_input`<sup>Optional</sup> <a name="rollout_input_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInputInput"></a>

```python
rollout_input_input: GoogleComputePreviewFeatureRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputePreviewFeatureRolloutOperation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

---


### GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference <a name="GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput">predefined_rollout_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan">predefined_rollout_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predefined_rollout_plan_input`<sup>Optional</sup> <a name="predefined_rollout_plan_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput"></a>

```python
predefined_rollout_plan_input: str
```

- *Type:* str

---

##### `predefined_rollout_plan`<sup>Required</sup> <a name="predefined_rollout_plan" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan"></a>

```python
predefined_rollout_plan: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputePreviewFeatureRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

---


### GoogleComputePreviewFeatureTimeoutsOutputReference <a name="GoogleComputePreviewFeatureTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_preview_feature

googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputePreviewFeatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a>]

---



