# `googleVertexAiDeploymentResourcePool` Submodule <a name="`googleVertexAiDeploymentResourcePool` Submodule" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiDeploymentResourcePool <a name="GoogleVertexAiDeploymentResourcePool" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool google_vertex_ai_deployment_resource_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  dedicated_resources: GoogleVertexAiDeploymentResourcePoolDedicatedResources = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiDeploymentResourcePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.dedicatedResources">dedicated_resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of deployment resource pool. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.name"></a>

- *Type:* str

The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#name GoogleVertexAiDeploymentResourcePool#name}

---

##### `dedicated_resources`<sup>Optional</sup> <a name="dedicated_resources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.dedicatedResources"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#dedicated_resources GoogleVertexAiDeploymentResourcePool#dedicated_resources}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.region"></a>

- *Type:* str

The region of deployment resource pool. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#region GoogleVertexAiDeploymentResourcePool#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#timeouts GoogleVertexAiDeploymentResourcePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources">put_dedicated_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetDedicatedResources">reset_dedicated_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dedicated_resources` <a name="put_dedicated_resources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources"></a>

```python
def put_dedicated_resources(
  machine_spec: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec,
  min_replica_count: typing.Union[int, float],
  autoscaling_metric_specs: typing.Union[IResolvable, typing.List[GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]] = None,
  max_replica_count: typing.Union[int, float] = None
) -> None
```

###### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources.parameter.machineSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#machine_spec GoogleVertexAiDeploymentResourcePool#machine_spec}

---

###### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources.parameter.minReplicaCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1. If traffic against the DeployedModel increases, it may dynamically be deployed onto more replicas, and as traffic decreases, some of these extra replicas may be freed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#min_replica_count GoogleVertexAiDeploymentResourcePool#min_replica_count}

---

###### `autoscaling_metric_specs`<sup>Optional</sup> <a name="autoscaling_metric_specs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources.parameter.autoscalingMetricSpecs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]

autoscaling_metric_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#autoscaling_metric_specs GoogleVertexAiDeploymentResourcePool#autoscaling_metric_specs}

---

###### `max_replica_count`<sup>Optional</sup> <a name="max_replica_count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putDedicatedResources.parameter.maxReplicaCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, will use min_replica_count as the default value. The value of this field impacts the charge against Vertex CPU and GPU quotas. Specifically, you will be charged for max_replica_count * number of cores in the selected machine type) and (max_replica_count * number of GPUs per replica in the selected machine type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#max_replica_count GoogleVertexAiDeploymentResourcePool#max_replica_count}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#create GoogleVertexAiDeploymentResourcePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#delete GoogleVertexAiDeploymentResourcePool#delete}.

---

##### `reset_dedicated_resources` <a name="reset_dedicated_resources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetDedicatedResources"></a>

```python
def reset_dedicated_resources() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiDeploymentResourcePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiDeploymentResourcePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiDeploymentResourcePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResources">dedicated_resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference">GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResourcesInput">dedicated_resources_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `dedicated_resources`<sup>Required</sup> <a name="dedicated_resources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResources"></a>

```python
dedicated_resources: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeouts"></a>

```python
timeouts: GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference">GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference</a>

---

##### `dedicated_resources_input`<sup>Optional</sup> <a name="dedicated_resources_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.dedicatedResourcesInput"></a>

```python
dedicated_resources_input: GoogleVertexAiDeploymentResourcePoolDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleVertexAiDeploymentResourcePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiDeploymentResourcePoolConfig <a name="GoogleVertexAiDeploymentResourcePoolConfig" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  dedicated_resources: GoogleVertexAiDeploymentResourcePoolDedicatedResources = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiDeploymentResourcePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.name">name</a></code> | <code>str</code> | The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dedicatedResources">dedicated_resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | dedicated_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.region">region</a></code> | <code>str</code> | The region of deployment resource pool. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#name GoogleVertexAiDeploymentResourcePool#name}

---

##### `dedicated_resources`<sup>Optional</sup> <a name="dedicated_resources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.dedicatedResources"></a>

```python
dedicated_resources: GoogleVertexAiDeploymentResourcePoolDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

dedicated_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#dedicated_resources GoogleVertexAiDeploymentResourcePool#dedicated_resources}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#id GoogleVertexAiDeploymentResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#project GoogleVertexAiDeploymentResourcePool#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of deployment resource pool. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#region GoogleVertexAiDeploymentResourcePool#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiDeploymentResourcePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#timeouts GoogleVertexAiDeploymentResourcePool#timeouts}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResources <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResources" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources(
  machine_spec: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec,
  min_replica_count: typing.Union[int, float],
  autoscaling_metric_specs: typing.Union[IResolvable, typing.List[GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]] = None,
  max_replica_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of machine replicas this DeployedModel will be always deployed on. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs">autoscaling_metric_specs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]</code> | autoscaling_metric_specs block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. |

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.machineSpec"></a>

```python
machine_spec: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#machine_spec GoogleVertexAiDeploymentResourcePool#machine_spec}

---

##### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.minReplicaCount"></a>

```python
min_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of machine replicas this DeployedModel will be always deployed on.

This value must be greater than or equal to 1. If traffic against the DeployedModel increases, it may dynamically be deployed onto more replicas, and as traffic decreases, some of these extra replicas may be freed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#min_replica_count GoogleVertexAiDeploymentResourcePool#min_replica_count}

---

##### `autoscaling_metric_specs`<sup>Optional</sup> <a name="autoscaling_metric_specs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.autoscalingMetricSpecs"></a>

```python
autoscaling_metric_specs: typing.Union[IResolvable, typing.List[GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]

autoscaling_metric_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#autoscaling_metric_specs GoogleVertexAiDeploymentResourcePool#autoscaling_metric_specs}

---

##### `max_replica_count`<sup>Optional</sup> <a name="max_replica_count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources.property.maxReplicaCount"></a>

```python
max_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases.

If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, will use min_replica_count as the default value. The value of this field impacts the charge against Vertex CPU and GPU quotas. Specifically, you will be charged for max_replica_count * number of cores in the selected machine type) and (max_replica_count * number of GPUs per replica in the selected machine type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#max_replica_count GoogleVertexAiDeploymentResourcePool#max_replica_count}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs(
  metric_name: str,
  target: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName">metric_name</a></code> | <code>str</code> | The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target">target</a></code> | <code>typing.Union[int, float]</code> | The target resource utilization in percentage (1% - 100%) for the given metric; |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#metric_name GoogleVertexAiDeploymentResourcePool#metric_name}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target resource utilization in percentage (1% - 100%) for the given metric;

once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#target GoogleVertexAiDeploymentResourcePool#target}

---

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType). |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType">machine_type</a></code> | <code>str</code> | The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types). |

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#accelerator_count GoogleVertexAiDeploymentResourcePool#accelerator_count}

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#accelerator_type GoogleVertexAiDeploymentResourcePool#accelerator_type}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#machine_type GoogleVertexAiDeploymentResourcePool#machine_type}

---

### GoogleVertexAiDeploymentResourcePoolTimeouts <a name="GoogleVertexAiDeploymentResourcePoolTimeouts" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#create GoogleVertexAiDeploymentResourcePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#delete GoogleVertexAiDeploymentResourcePool#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#create GoogleVertexAiDeploymentResourcePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#delete GoogleVertexAiDeploymentResourcePool#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target` <a name="reset_target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target">target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---


### GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference <a name="GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs">put_autoscaling_metric_specs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec">put_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs">reset_autoscaling_metric_specs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount">reset_max_replica_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_metric_specs` <a name="put_autoscaling_metric_specs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs"></a>

```python
def put_autoscaling_metric_specs(
  value: typing.Union[IResolvable, typing.List[GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putAutoscalingMetricSpecs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]

---

##### `put_machine_spec` <a name="put_machine_spec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec"></a>

```python
def put_machine_spec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
) -> None
```

###### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec.parameter.acceleratorCount"></a>

- *Type:* typing.Union[int, float]

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#accelerator_count GoogleVertexAiDeploymentResourcePool#accelerator_count}

---

###### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec.parameter.acceleratorType"></a>

- *Type:* str

The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#accelerator_type GoogleVertexAiDeploymentResourcePool#accelerator_type}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.putMachineSpec.parameter.machineType"></a>

- *Type:* str

The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_vertex_ai_deployment_resource_pool#machine_type GoogleVertexAiDeploymentResourcePool#machine_type}

---

##### `reset_autoscaling_metric_specs` <a name="reset_autoscaling_metric_specs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetAutoscalingMetricSpecs"></a>

```python
def reset_autoscaling_metric_specs() -> None
```

##### `reset_max_replica_count` <a name="reset_max_replica_count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.resetMaxReplicaCount"></a>

```python
def reset_max_replica_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs">autoscaling_metric_specs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput">autoscaling_metric_specs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput">machine_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput">max_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput">min_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount">max_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount">min_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_metric_specs`<sup>Required</sup> <a name="autoscaling_metric_specs" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecs"></a>

```python
autoscaling_metric_specs: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList</a>

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpec"></a>

```python
machine_spec: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference</a>

---

##### `autoscaling_metric_specs_input`<sup>Optional</sup> <a name="autoscaling_metric_specs_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.autoscalingMetricSpecsInput"></a>

```python
autoscaling_metric_specs_input: typing.Union[IResolvable, typing.List[GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs</a>]]

---

##### `machine_spec_input`<sup>Optional</sup> <a name="machine_spec_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.machineSpecInput"></a>

```python
machine_spec_input: GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec">GoogleVertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec</a>

---

##### `max_replica_count_input`<sup>Optional</sup> <a name="max_replica_count_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCountInput"></a>

```python
max_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replica_count_input`<sup>Optional</sup> <a name="min_replica_count_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCountInput"></a>

```python
min_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_replica_count`<sup>Required</sup> <a name="max_replica_count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.maxReplicaCount"></a>

```python
max_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replica_count`<sup>Required</sup> <a name="min_replica_count" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.minReplicaCount"></a>

```python
min_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResourcesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiDeploymentResourcePoolDedicatedResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolDedicatedResources">GoogleVertexAiDeploymentResourcePoolDedicatedResources</a>

---


### GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference <a name="GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_deployment_resource_pool

googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVertexAiDeploymentResourcePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiDeploymentResourcePool.GoogleVertexAiDeploymentResourcePoolTimeouts">GoogleVertexAiDeploymentResourcePoolTimeouts</a>]

---



