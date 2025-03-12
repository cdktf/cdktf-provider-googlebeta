# `googleNotebooksEnvironment` Submodule <a name="`googleNotebooksEnvironment` Submodule" id="@cdktf/provider-google-beta.googleNotebooksEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNotebooksEnvironment <a name="GoogleNotebooksEnvironment" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment google_notebooks_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  container_image: GoogleNotebooksEnvironmentContainerImage = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  post_startup_script: str = None,
  project: str = None,
  timeouts: GoogleNotebooksEnvironmentTimeouts = None,
  vm_image: GoogleNotebooksEnvironmentVmImage = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.location">location</a></code> | <code>str</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.description">description</a></code> | <code>str</code> | A brief description of this environment. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of this environment for the UI. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#id GoogleNotebooksEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.postStartupScript">post_startup_script</a></code> | <code>str</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#project GoogleNotebooksEnvironment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts">GoogleNotebooksEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a></code> | vm_image block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.location"></a>

- *Type:* str

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#location GoogleNotebooksEnvironment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.name"></a>

- *Type:* str

The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#name GoogleNotebooksEnvironment#name}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.containerImage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#container_image GoogleNotebooksEnvironment#container_image}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.description"></a>

- *Type:* str

A brief description of this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#description GoogleNotebooksEnvironment#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of this environment for the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#display_name GoogleNotebooksEnvironment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#id GoogleNotebooksEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.postStartupScript"></a>

- *Type:* str

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#post_startup_script GoogleNotebooksEnvironment#post_startup_script}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#project GoogleNotebooksEnvironment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts">GoogleNotebooksEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#timeouts GoogleNotebooksEnvironment#timeouts}

---

##### `vm_image`<sup>Optional</sup> <a name="vm_image" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.vmImage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#vm_image GoogleNotebooksEnvironment#vm_image}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putContainerImage">put_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putVmImage">put_vm_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetPostStartupScript">reset_post_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetVmImage">reset_vm_image</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_container_image` <a name="put_container_image" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putContainerImage"></a>

```python
def put_container_image(
  repository: str,
  tag: str = None
) -> None
```

###### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putContainerImage.parameter.repository"></a>

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#repository GoogleNotebooksEnvironment#repository}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putContainerImage.parameter.tag"></a>

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#tag GoogleNotebooksEnvironment#tag}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#create GoogleNotebooksEnvironment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#delete GoogleNotebooksEnvironment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#update GoogleNotebooksEnvironment#update}.

---

##### `put_vm_image` <a name="put_vm_image" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putVmImage"></a>

```python
def put_vm_image(
  project: str,
  image_family: str = None,
  image_name: str = None
) -> None
```

###### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putVmImage.parameter.project"></a>

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#project GoogleNotebooksEnvironment#project}

---

###### `image_family`<sup>Optional</sup> <a name="image_family" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putVmImage.parameter.imageFamily"></a>

- *Type:* str

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#image_family GoogleNotebooksEnvironment#image_family}

---

###### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putVmImage.parameter.imageName"></a>

- *Type:* str

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#image_name GoogleNotebooksEnvironment#image_name}

---

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_post_startup_script` <a name="reset_post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetPostStartupScript"></a>

```python
def reset_post_startup_script() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vm_image` <a name="reset_vm_image" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetVmImage"></a>

```python
def reset_vm_image() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNotebooksEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNotebooksEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNotebooksEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNotebooksEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNotebooksEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference">GoogleNotebooksEnvironmentContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference">GoogleNotebooksEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference">GoogleNotebooksEnvironmentVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.containerImageInput">container_image_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.postStartupScriptInput">post_startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts">GoogleNotebooksEnvironmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.vmImageInput">vm_image_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.containerImage"></a>

```python
container_image: GoogleNotebooksEnvironmentContainerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference">GoogleNotebooksEnvironmentContainerImageOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.timeouts"></a>

```python
timeouts: GoogleNotebooksEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference">GoogleNotebooksEnvironmentTimeoutsOutputReference</a>

---

##### `vm_image`<sup>Required</sup> <a name="vm_image" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.vmImage"></a>

```python
vm_image: GoogleNotebooksEnvironmentVmImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference">GoogleNotebooksEnvironmentVmImageOutputReference</a>

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.containerImageInput"></a>

```python
container_image_input: GoogleNotebooksEnvironmentContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `post_startup_script_input`<sup>Optional</sup> <a name="post_startup_script_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.postStartupScriptInput"></a>

```python
post_startup_script_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNotebooksEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts">GoogleNotebooksEnvironmentTimeouts</a>]

---

##### `vm_image_input`<sup>Optional</sup> <a name="vm_image_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.vmImageInput"></a>

```python
vm_image_input: GoogleNotebooksEnvironmentVmImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `post_startup_script`<sup>Required</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNotebooksEnvironmentConfig <a name="GoogleNotebooksEnvironmentConfig" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  container_image: GoogleNotebooksEnvironmentContainerImage = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  post_startup_script: str = None,
  project: str = None,
  timeouts: GoogleNotebooksEnvironmentTimeouts = None,
  vm_image: GoogleNotebooksEnvironmentVmImage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.location">location</a></code> | <code>str</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.name">name</a></code> | <code>str</code> | The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.description">description</a></code> | <code>str</code> | A brief description of this environment. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of this environment for the UI. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#id GoogleNotebooksEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#project GoogleNotebooksEnvironment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts">GoogleNotebooksEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.vmImage">vm_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a></code> | vm_image block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#location GoogleNotebooksEnvironment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#name GoogleNotebooksEnvironment#name}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.containerImage"></a>

```python
container_image: GoogleNotebooksEnvironmentContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#container_image GoogleNotebooksEnvironment#container_image}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A brief description of this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#description GoogleNotebooksEnvironment#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of this environment for the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#display_name GoogleNotebooksEnvironment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#id GoogleNotebooksEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#post_startup_script GoogleNotebooksEnvironment#post_startup_script}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#project GoogleNotebooksEnvironment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.timeouts"></a>

```python
timeouts: GoogleNotebooksEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts">GoogleNotebooksEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#timeouts GoogleNotebooksEnvironment#timeouts}

---

##### `vm_image`<sup>Optional</sup> <a name="vm_image" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.vmImage"></a>

```python
vm_image: GoogleNotebooksEnvironmentVmImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#vm_image GoogleNotebooksEnvironment#vm_image}

---

### GoogleNotebooksEnvironmentContainerImage <a name="GoogleNotebooksEnvironmentContainerImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage(
  repository: str,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage.property.repository">repository</a></code> | <code>str</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage.property.tag">tag</a></code> | <code>str</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage.property.repository"></a>

```python
repository: str
```

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#repository GoogleNotebooksEnvironment#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#tag GoogleNotebooksEnvironment#tag}

---

### GoogleNotebooksEnvironmentTimeouts <a name="GoogleNotebooksEnvironmentTimeouts" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#create GoogleNotebooksEnvironment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#delete GoogleNotebooksEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#update GoogleNotebooksEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#create GoogleNotebooksEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#delete GoogleNotebooksEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#update GoogleNotebooksEnvironment#update}.

---

### GoogleNotebooksEnvironmentVmImage <a name="GoogleNotebooksEnvironmentVmImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage(
  project: str,
  image_family: str = None,
  image_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.project">project</a></code> | <code>str</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.imageFamily">image_family</a></code> | <code>str</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.imageName">image_name</a></code> | <code>str</code> | Use VM image name to find the image. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.project"></a>

```python
project: str
```

- *Type:* str

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#project GoogleNotebooksEnvironment#project}

---

##### `image_family`<sup>Optional</sup> <a name="image_family" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.imageFamily"></a>

```python
image_family: str
```

- *Type:* str

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#image_family GoogleNotebooksEnvironment#image_family}

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_notebooks_environment#image_name GoogleNotebooksEnvironment#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNotebooksEnvironmentContainerImageOutputReference <a name="GoogleNotebooksEnvironmentContainerImageOutputReference" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksEnvironmentContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a>

---


### GoogleNotebooksEnvironmentTimeoutsOutputReference <a name="GoogleNotebooksEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts">GoogleNotebooksEnvironmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNotebooksEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts">GoogleNotebooksEnvironmentTimeouts</a>]

---


### GoogleNotebooksEnvironmentVmImageOutputReference <a name="GoogleNotebooksEnvironmentVmImageOutputReference" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_environment

googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resetImageFamily">reset_image_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resetImageName">reset_image_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_family` <a name="reset_image_family" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resetImageFamily"></a>

```python
def reset_image_family() -> None
```

##### `reset_image_name` <a name="reset_image_name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resetImageName"></a>

```python
def reset_image_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageFamilyInput">image_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageFamily">image_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_family_input`<sup>Optional</sup> <a name="image_family_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageFamilyInput"></a>

```python
image_family_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `image_family`<sup>Required</sup> <a name="image_family" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageFamily"></a>

```python
image_family: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksEnvironmentVmImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a>

---



