# `googleSecureSourceManagerRepository` Submodule <a name="`googleSecureSourceManagerRepository` Submodule" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecureSourceManagerRepository <a name="GoogleSecureSourceManagerRepository" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository google_secure_source_manager_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  location: str,
  repository_id: str,
  description: str = None,
  id: str = None,
  initial_config: GoogleSecureSourceManagerRepositoryInitialConfig = None,
  project: str = None,
  timeouts: GoogleSecureSourceManagerRepositoryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The name of the instance in which the repository is hosted. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the repository, which cannot exceed 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#id GoogleSecureSourceManagerRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.initialConfig">initial_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a></code> | initial_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#project GoogleSecureSourceManagerRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.instance"></a>

- *Type:* str

The name of the instance in which the repository is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#instance GoogleSecureSourceManagerRepository#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.location"></a>

- *Type:* str

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#location GoogleSecureSourceManagerRepository#location}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.repositoryId"></a>

- *Type:* str

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#repository_id GoogleSecureSourceManagerRepository#repository_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.description"></a>

- *Type:* str

Description of the repository, which cannot exceed 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#description GoogleSecureSourceManagerRepository#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#id GoogleSecureSourceManagerRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_config`<sup>Optional</sup> <a name="initial_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.initialConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a>

initial_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#initial_config GoogleSecureSourceManagerRepository#initial_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#project GoogleSecureSourceManagerRepository#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#timeouts GoogleSecureSourceManagerRepository#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putInitialConfig">put_initial_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetInitialConfig">reset_initial_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_initial_config` <a name="put_initial_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putInitialConfig"></a>

```python
def put_initial_config(
  default_branch: str = None,
  gitignores: typing.List[str] = None,
  license: str = None,
  readme: str = None
) -> None
```

###### `default_branch`<sup>Optional</sup> <a name="default_branch" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putInitialConfig.parameter.defaultBranch"></a>

- *Type:* str

Default branch name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#default_branch GoogleSecureSourceManagerRepository#default_branch}

---

###### `gitignores`<sup>Optional</sup> <a name="gitignores" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putInitialConfig.parameter.gitignores"></a>

- *Type:* typing.List[str]

List of gitignore template names user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#gitignores GoogleSecureSourceManagerRepository#gitignores}

---

###### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putInitialConfig.parameter.license"></a>

- *Type:* str

License template name user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#license GoogleSecureSourceManagerRepository#license}

---

###### `readme`<sup>Optional</sup> <a name="readme" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putInitialConfig.parameter.readme"></a>

- *Type:* str

README template name. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#readme GoogleSecureSourceManagerRepository#readme}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#create GoogleSecureSourceManagerRepository#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#delete GoogleSecureSourceManagerRepository#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_config` <a name="reset_initial_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetInitialConfig"></a>

```python
def reset_initial_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSecureSourceManagerRepository resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSecureSourceManagerRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSecureSourceManagerRepository to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSecureSourceManagerRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecureSourceManagerRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.initialConfig">initial_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference">GoogleSecureSourceManagerRepositoryInitialConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference">GoogleSecureSourceManagerRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.uris">uris</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList">GoogleSecureSourceManagerRepositoryUrisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.initialConfigInput">initial_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `initial_config`<sup>Required</sup> <a name="initial_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.initialConfig"></a>

```python
initial_config: GoogleSecureSourceManagerRepositoryInitialConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference">GoogleSecureSourceManagerRepositoryInitialConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.timeouts"></a>

```python
timeouts: GoogleSecureSourceManagerRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference">GoogleSecureSourceManagerRepositoryTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.uris"></a>

```python
uris: GoogleSecureSourceManagerRepositoryUrisList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList">GoogleSecureSourceManagerRepositoryUrisList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_config_input`<sup>Optional</sup> <a name="initial_config_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.initialConfigInput"></a>

```python
initial_config_input: GoogleSecureSourceManagerRepositoryInitialConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a>

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSecureSourceManagerRepositoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecureSourceManagerRepositoryConfig <a name="GoogleSecureSourceManagerRepositoryConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  location: str,
  repository_id: str,
  description: str = None,
  id: str = None,
  initial_config: GoogleSecureSourceManagerRepositoryInitialConfig = None,
  project: str = None,
  timeouts: GoogleSecureSourceManagerRepositoryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.instance">instance</a></code> | <code>str</code> | The name of the instance in which the repository is hosted. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.location">location</a></code> | <code>str</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.description">description</a></code> | <code>str</code> | Description of the repository, which cannot exceed 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#id GoogleSecureSourceManagerRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.initialConfig">initial_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a></code> | initial_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#project GoogleSecureSourceManagerRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The name of the instance in which the repository is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#instance GoogleSecureSourceManagerRepository#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#location GoogleSecureSourceManagerRepository#location}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#repository_id GoogleSecureSourceManagerRepository#repository_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the repository, which cannot exceed 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#description GoogleSecureSourceManagerRepository#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#id GoogleSecureSourceManagerRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_config`<sup>Optional</sup> <a name="initial_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.initialConfig"></a>

```python
initial_config: GoogleSecureSourceManagerRepositoryInitialConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a>

initial_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#initial_config GoogleSecureSourceManagerRepository#initial_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#project GoogleSecureSourceManagerRepository#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryConfig.property.timeouts"></a>

```python
timeouts: GoogleSecureSourceManagerRepositoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#timeouts GoogleSecureSourceManagerRepository#timeouts}

---

### GoogleSecureSourceManagerRepositoryInitialConfig <a name="GoogleSecureSourceManagerRepositoryInitialConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig(
  default_branch: str = None,
  gitignores: typing.List[str] = None,
  license: str = None,
  readme: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.defaultBranch">default_branch</a></code> | <code>str</code> | Default branch name of the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.gitignores">gitignores</a></code> | <code>typing.List[str]</code> | List of gitignore template names user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.license">license</a></code> | <code>str</code> | License template name user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.readme">readme</a></code> | <code>str</code> | README template name. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |

---

##### `default_branch`<sup>Optional</sup> <a name="default_branch" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

Default branch name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#default_branch GoogleSecureSourceManagerRepository#default_branch}

---

##### `gitignores`<sup>Optional</sup> <a name="gitignores" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.gitignores"></a>

```python
gitignores: typing.List[str]
```

- *Type:* typing.List[str]

List of gitignore template names user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#gitignores GoogleSecureSourceManagerRepository#gitignores}

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.license"></a>

```python
license: str
```

- *Type:* str

License template name user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#license GoogleSecureSourceManagerRepository#license}

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig.property.readme"></a>

```python
readme: str
```

- *Type:* str

README template name. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#readme GoogleSecureSourceManagerRepository#readme}

---

### GoogleSecureSourceManagerRepositoryTimeouts <a name="GoogleSecureSourceManagerRepositoryTimeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#create GoogleSecureSourceManagerRepository#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#delete GoogleSecureSourceManagerRepository#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#create GoogleSecureSourceManagerRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_repository#delete GoogleSecureSourceManagerRepository#delete}.

---

### GoogleSecureSourceManagerRepositoryUris <a name="GoogleSecureSourceManagerRepositoryUris" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUris"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUris.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUris()
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleSecureSourceManagerRepositoryInitialConfigOutputReference <a name="GoogleSecureSourceManagerRepositoryInitialConfigOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetDefaultBranch">reset_default_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetGitignores">reset_gitignores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetLicense">reset_license</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetReadme">reset_readme</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_branch` <a name="reset_default_branch" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetDefaultBranch"></a>

```python
def reset_default_branch() -> None
```

##### `reset_gitignores` <a name="reset_gitignores" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetGitignores"></a>

```python
def reset_gitignores() -> None
```

##### `reset_license` <a name="reset_license" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetLicense"></a>

```python
def reset_license() -> None
```

##### `reset_readme` <a name="reset_readme" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.resetReadme"></a>

```python
def reset_readme() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranchInput">default_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignoresInput">gitignores_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.licenseInput">license_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.readmeInput">readme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranch">default_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignores">gitignores</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.license">license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.readme">readme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_branch_input`<sup>Optional</sup> <a name="default_branch_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranchInput"></a>

```python
default_branch_input: str
```

- *Type:* str

---

##### `gitignores_input`<sup>Optional</sup> <a name="gitignores_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignoresInput"></a>

```python
gitignores_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `license_input`<sup>Optional</sup> <a name="license_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.licenseInput"></a>

```python
license_input: str
```

- *Type:* str

---

##### `readme_input`<sup>Optional</sup> <a name="readme_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.readmeInput"></a>

```python
readme_input: str
```

- *Type:* str

---

##### `default_branch`<sup>Required</sup> <a name="default_branch" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

---

##### `gitignores`<sup>Required</sup> <a name="gitignores" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignores"></a>

```python
gitignores: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.license"></a>

```python
license: str
```

- *Type:* str

---

##### `readme`<sup>Required</sup> <a name="readme" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.readme"></a>

```python
readme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecureSourceManagerRepositoryInitialConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryInitialConfig">GoogleSecureSourceManagerRepositoryInitialConfig</a>

---


### GoogleSecureSourceManagerRepositoryTimeoutsOutputReference <a name="GoogleSecureSourceManagerRepositoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSecureSourceManagerRepositoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryTimeouts">GoogleSecureSourceManagerRepositoryTimeouts</a>]

---


### GoogleSecureSourceManagerRepositoryUrisList <a name="GoogleSecureSourceManagerRepositoryUrisList" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSecureSourceManagerRepositoryUrisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleSecureSourceManagerRepositoryUrisOutputReference <a name="GoogleSecureSourceManagerRepositoryUrisOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_repository

googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.gitHttps">git_https</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.html">html</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUris">GoogleSecureSourceManagerRepositoryUris</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `git_https`<sup>Required</sup> <a name="git_https" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.gitHttps"></a>

```python
git_https: str
```

- *Type:* str

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.html"></a>

```python
html: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUrisOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecureSourceManagerRepositoryUris
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerRepository.GoogleSecureSourceManagerRepositoryUris">GoogleSecureSourceManagerRepositoryUris</a>

---



