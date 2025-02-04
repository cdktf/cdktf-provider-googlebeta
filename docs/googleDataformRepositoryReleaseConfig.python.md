# `googleDataformRepositoryReleaseConfig` Submodule <a name="`googleDataformRepositoryReleaseConfig` Submodule" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataformRepositoryReleaseConfig <a name="GoogleDataformRepositoryReleaseConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config google_dataform_repository_release_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  git_commitish: str,
  name: str,
  code_compilation_config: GoogleDataformRepositoryReleaseConfigCodeCompilationConfig = None,
  cron_schedule: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  repository: str = None,
  timeouts: GoogleDataformRepositoryReleaseConfigTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.gitCommitish">git_commitish</a></code> | <code>str</code> | Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The release's name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.codeCompilationConfig">code_compilation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | code_compilation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.cronSchedule">cron_schedule</a></code> | <code>str</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#id GoogleDataformRepositoryReleaseConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#project GoogleDataformRepositoryReleaseConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.region">region</a></code> | <code>str</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.repository">repository</a></code> | <code>str</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `git_commitish`<sup>Required</sup> <a name="git_commitish" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.gitCommitish"></a>

- *Type:* str

Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#git_commitish GoogleDataformRepositoryReleaseConfig#git_commitish}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.name"></a>

- *Type:* str

The release's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#name GoogleDataformRepositoryReleaseConfig#name}

---

##### `code_compilation_config`<sup>Optional</sup> <a name="code_compilation_config" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.codeCompilationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a>

code_compilation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#code_compilation_config GoogleDataformRepositoryReleaseConfig#code_compilation_config}

---

##### `cron_schedule`<sup>Optional</sup> <a name="cron_schedule" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.cronSchedule"></a>

- *Type:* str

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#cron_schedule GoogleDataformRepositoryReleaseConfig#cron_schedule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#id GoogleDataformRepositoryReleaseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#project GoogleDataformRepositoryReleaseConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.region"></a>

- *Type:* str

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#region GoogleDataformRepositoryReleaseConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.repository"></a>

- *Type:* str

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#repository GoogleDataformRepositoryReleaseConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#timeouts GoogleDataformRepositoryReleaseConfig#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.Initializer.parameter.timeZone"></a>

- *Type:* str

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#time_zone GoogleDataformRepositoryReleaseConfig#time_zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig">put_code_compilation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetCodeCompilationConfig">reset_code_compilation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetCronSchedule">reset_cron_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetRepository">reset_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_code_compilation_config` <a name="put_code_compilation_config" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig"></a>

```python
def put_code_compilation_config(
  assertion_schema: str = None,
  database_suffix: str = None,
  default_database: str = None,
  default_location: str = None,
  default_schema: str = None,
  schema_suffix: str = None,
  table_prefix: str = None,
  vars: typing.Mapping[str] = None
) -> None
```

###### `assertion_schema`<sup>Optional</sup> <a name="assertion_schema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.assertionSchema"></a>

- *Type:* str

Optional. The default schema (BigQuery dataset ID) for assertions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#assertion_schema GoogleDataformRepositoryReleaseConfig#assertion_schema}

---

###### `database_suffix`<sup>Optional</sup> <a name="database_suffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.databaseSuffix"></a>

- *Type:* str

Optional. The suffix that should be appended to all database (Google Cloud project ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#database_suffix GoogleDataformRepositoryReleaseConfig#database_suffix}

---

###### `default_database`<sup>Optional</sup> <a name="default_database" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.defaultDatabase"></a>

- *Type:* str

Optional. The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#default_database GoogleDataformRepositoryReleaseConfig#default_database}

---

###### `default_location`<sup>Optional</sup> <a name="default_location" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.defaultLocation"></a>

- *Type:* str

Optional.

The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#default_location GoogleDataformRepositoryReleaseConfig#default_location}

---

###### `default_schema`<sup>Optional</sup> <a name="default_schema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.defaultSchema"></a>

- *Type:* str

Optional. The default schema (BigQuery dataset ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#default_schema GoogleDataformRepositoryReleaseConfig#default_schema}

---

###### `schema_suffix`<sup>Optional</sup> <a name="schema_suffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.schemaSuffix"></a>

- *Type:* str

Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#schema_suffix GoogleDataformRepositoryReleaseConfig#schema_suffix}

---

###### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.tablePrefix"></a>

- *Type:* str

Optional. The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#table_prefix GoogleDataformRepositoryReleaseConfig#table_prefix}

---

###### `vars`<sup>Optional</sup> <a name="vars" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putCodeCompilationConfig.parameter.vars"></a>

- *Type:* typing.Mapping[str]

Optional.

User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#vars GoogleDataformRepositoryReleaseConfig#vars}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#create GoogleDataformRepositoryReleaseConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#delete GoogleDataformRepositoryReleaseConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#update GoogleDataformRepositoryReleaseConfig#update}.

---

##### `reset_code_compilation_config` <a name="reset_code_compilation_config" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetCodeCompilationConfig"></a>

```python
def reset_code_compilation_config() -> None
```

##### `reset_cron_schedule` <a name="reset_cron_schedule" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetCronSchedule"></a>

```python
def reset_cron_schedule() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetRepository"></a>

```python
def reset_repository() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataformRepositoryReleaseConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataformRepositoryReleaseConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataformRepositoryReleaseConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataformRepositoryReleaseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataformRepositoryReleaseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.codeCompilationConfig">code_compilation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords">recent_scheduled_release_records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference">GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.codeCompilationConfigInput">code_compilation_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cronScheduleInput">cron_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.gitCommitishInput">git_commitish_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cronSchedule">cron_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.gitCommitish">git_commitish</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `code_compilation_config`<sup>Required</sup> <a name="code_compilation_config" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.codeCompilationConfig"></a>

```python
code_compilation_config: GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference">GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference</a>

---

##### `recent_scheduled_release_records`<sup>Required</sup> <a name="recent_scheduled_release_records" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.recentScheduledReleaseRecords"></a>

```python
recent_scheduled_release_records: GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeouts"></a>

```python
timeouts: GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference">GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference</a>

---

##### `code_compilation_config_input`<sup>Optional</sup> <a name="code_compilation_config_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.codeCompilationConfigInput"></a>

```python
code_compilation_config_input: GoogleDataformRepositoryReleaseConfigCodeCompilationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a>

---

##### `cron_schedule_input`<sup>Optional</sup> <a name="cron_schedule_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cronScheduleInput"></a>

```python
cron_schedule_input: str
```

- *Type:* str

---

##### `git_commitish_input`<sup>Optional</sup> <a name="git_commitish_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.gitCommitishInput"></a>

```python
git_commitish_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataformRepositoryReleaseConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `cron_schedule`<sup>Required</sup> <a name="cron_schedule" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.cronSchedule"></a>

```python
cron_schedule: str
```

- *Type:* str

---

##### `git_commitish`<sup>Required</sup> <a name="git_commitish" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.gitCommitish"></a>

```python
git_commitish: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataformRepositoryReleaseConfigCodeCompilationConfig <a name="GoogleDataformRepositoryReleaseConfigCodeCompilationConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig(
  assertion_schema: str = None,
  database_suffix: str = None,
  default_database: str = None,
  default_location: str = None,
  default_schema: str = None,
  schema_suffix: str = None,
  table_prefix: str = None,
  vars: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema">assertion_schema</a></code> | <code>str</code> | Optional. The default schema (BigQuery dataset ID) for assertions. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix">database_suffix</a></code> | <code>str</code> | Optional. The suffix that should be appended to all database (Google Cloud project ID) names. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase">default_database</a></code> | <code>str</code> | Optional. The default database (Google Cloud project ID). |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation">default_location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema">default_schema</a></code> | <code>str</code> | Optional. The default schema (BigQuery dataset ID). |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix">schema_suffix</a></code> | <code>str</code> | Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix">table_prefix</a></code> | <code>str</code> | Optional. The prefix that should be prepended to all table names. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.vars">vars</a></code> | <code>typing.Mapping[str]</code> | Optional. |

---

##### `assertion_schema`<sup>Optional</sup> <a name="assertion_schema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.assertionSchema"></a>

```python
assertion_schema: str
```

- *Type:* str

Optional. The default schema (BigQuery dataset ID) for assertions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#assertion_schema GoogleDataformRepositoryReleaseConfig#assertion_schema}

---

##### `database_suffix`<sup>Optional</sup> <a name="database_suffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.databaseSuffix"></a>

```python
database_suffix: str
```

- *Type:* str

Optional. The suffix that should be appended to all database (Google Cloud project ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#database_suffix GoogleDataformRepositoryReleaseConfig#database_suffix}

---

##### `default_database`<sup>Optional</sup> <a name="default_database" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultDatabase"></a>

```python
default_database: str
```

- *Type:* str

Optional. The default database (Google Cloud project ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#default_database GoogleDataformRepositoryReleaseConfig#default_database}

---

##### `default_location`<sup>Optional</sup> <a name="default_location" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultLocation"></a>

```python
default_location: str
```

- *Type:* str

Optional.

The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#default_location GoogleDataformRepositoryReleaseConfig#default_location}

---

##### `default_schema`<sup>Optional</sup> <a name="default_schema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.defaultSchema"></a>

```python
default_schema: str
```

- *Type:* str

Optional. The default schema (BigQuery dataset ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#default_schema GoogleDataformRepositoryReleaseConfig#default_schema}

---

##### `schema_suffix`<sup>Optional</sup> <a name="schema_suffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.schemaSuffix"></a>

```python
schema_suffix: str
```

- *Type:* str

Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#schema_suffix GoogleDataformRepositoryReleaseConfig#schema_suffix}

---

##### `table_prefix`<sup>Optional</sup> <a name="table_prefix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

Optional. The prefix that should be prepended to all table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#table_prefix GoogleDataformRepositoryReleaseConfig#table_prefix}

---

##### `vars`<sup>Optional</sup> <a name="vars" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig.property.vars"></a>

```python
vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#vars GoogleDataformRepositoryReleaseConfig#vars}

---

### GoogleDataformRepositoryReleaseConfigConfig <a name="GoogleDataformRepositoryReleaseConfigConfig" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  git_commitish: str,
  name: str,
  code_compilation_config: GoogleDataformRepositoryReleaseConfigCodeCompilationConfig = None,
  cron_schedule: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  repository: str = None,
  timeouts: GoogleDataformRepositoryReleaseConfigTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.gitCommitish">git_commitish</a></code> | <code>str</code> | Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.name">name</a></code> | <code>str</code> | The release's name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.codeCompilationConfig">code_compilation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | code_compilation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.cronSchedule">cron_schedule</a></code> | <code>str</code> | Optional. Optional schedule (in cron format) for automatic creation of compilation results. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#id GoogleDataformRepositoryReleaseConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#project GoogleDataformRepositoryReleaseConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.region">region</a></code> | <code>str</code> | A reference to the region. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.repository">repository</a></code> | <code>str</code> | A reference to the Dataform repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `git_commitish`<sup>Required</sup> <a name="git_commitish" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.gitCommitish"></a>

```python
git_commitish: str
```

- *Type:* str

Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#git_commitish GoogleDataformRepositoryReleaseConfig#git_commitish}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The release's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#name GoogleDataformRepositoryReleaseConfig#name}

---

##### `code_compilation_config`<sup>Optional</sup> <a name="code_compilation_config" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.codeCompilationConfig"></a>

```python
code_compilation_config: GoogleDataformRepositoryReleaseConfigCodeCompilationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a>

code_compilation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#code_compilation_config GoogleDataformRepositoryReleaseConfig#code_compilation_config}

---

##### `cron_schedule`<sup>Optional</sup> <a name="cron_schedule" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.cronSchedule"></a>

```python
cron_schedule: str
```

- *Type:* str

Optional. Optional schedule (in cron format) for automatic creation of compilation results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#cron_schedule GoogleDataformRepositoryReleaseConfig#cron_schedule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#id GoogleDataformRepositoryReleaseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#project GoogleDataformRepositoryReleaseConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.region"></a>

```python
region: str
```

- *Type:* str

A reference to the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#region GoogleDataformRepositoryReleaseConfig#region}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

A reference to the Dataform repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#repository GoogleDataformRepositoryReleaseConfig#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleDataformRepositoryReleaseConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#timeouts GoogleDataformRepositoryReleaseConfig#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Optional.

Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#time_zone GoogleDataformRepositoryReleaseConfig#time_zone}

---

### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords()
```


### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus()
```


### GoogleDataformRepositoryReleaseConfigTimeouts <a name="GoogleDataformRepositoryReleaseConfigTimeouts" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#create GoogleDataformRepositoryReleaseConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#delete GoogleDataformRepositoryReleaseConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#update GoogleDataformRepositoryReleaseConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#create GoogleDataformRepositoryReleaseConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#delete GoogleDataformRepositoryReleaseConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataform_repository_release_config#update GoogleDataformRepositoryReleaseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference <a name="GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema">reset_assertion_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix">reset_database_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase">reset_default_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation">reset_default_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema">reset_default_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix">reset_schema_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix">reset_table_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars">reset_vars</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assertion_schema` <a name="reset_assertion_schema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetAssertionSchema"></a>

```python
def reset_assertion_schema() -> None
```

##### `reset_database_suffix` <a name="reset_database_suffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDatabaseSuffix"></a>

```python
def reset_database_suffix() -> None
```

##### `reset_default_database` <a name="reset_default_database" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultDatabase"></a>

```python
def reset_default_database() -> None
```

##### `reset_default_location` <a name="reset_default_location" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultLocation"></a>

```python
def reset_default_location() -> None
```

##### `reset_default_schema` <a name="reset_default_schema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetDefaultSchema"></a>

```python
def reset_default_schema() -> None
```

##### `reset_schema_suffix` <a name="reset_schema_suffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetSchemaSuffix"></a>

```python
def reset_schema_suffix() -> None
```

##### `reset_table_prefix` <a name="reset_table_prefix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetTablePrefix"></a>

```python
def reset_table_prefix() -> None
```

##### `reset_vars` <a name="reset_vars" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.resetVars"></a>

```python
def reset_vars() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput">assertion_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput">database_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput">default_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput">default_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput">default_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput">schema_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput">table_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput">vars_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema">assertion_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix">database_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase">default_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation">default_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema">default_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix">schema_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix">table_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars">vars</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assertion_schema_input`<sup>Optional</sup> <a name="assertion_schema_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchemaInput"></a>

```python
assertion_schema_input: str
```

- *Type:* str

---

##### `database_suffix_input`<sup>Optional</sup> <a name="database_suffix_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffixInput"></a>

```python
database_suffix_input: str
```

- *Type:* str

---

##### `default_database_input`<sup>Optional</sup> <a name="default_database_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabaseInput"></a>

```python
default_database_input: str
```

- *Type:* str

---

##### `default_location_input`<sup>Optional</sup> <a name="default_location_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocationInput"></a>

```python
default_location_input: str
```

- *Type:* str

---

##### `default_schema_input`<sup>Optional</sup> <a name="default_schema_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchemaInput"></a>

```python
default_schema_input: str
```

- *Type:* str

---

##### `schema_suffix_input`<sup>Optional</sup> <a name="schema_suffix_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffixInput"></a>

```python
schema_suffix_input: str
```

- *Type:* str

---

##### `table_prefix_input`<sup>Optional</sup> <a name="table_prefix_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefixInput"></a>

```python
table_prefix_input: str
```

- *Type:* str

---

##### `vars_input`<sup>Optional</sup> <a name="vars_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.varsInput"></a>

```python
vars_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `assertion_schema`<sup>Required</sup> <a name="assertion_schema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.assertionSchema"></a>

```python
assertion_schema: str
```

- *Type:* str

---

##### `database_suffix`<sup>Required</sup> <a name="database_suffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.databaseSuffix"></a>

```python
database_suffix: str
```

- *Type:* str

---

##### `default_database`<sup>Required</sup> <a name="default_database" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultDatabase"></a>

```python
default_database: str
```

- *Type:* str

---

##### `default_location`<sup>Required</sup> <a name="default_location" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultLocation"></a>

```python
default_location: str
```

- *Type:* str

---

##### `default_schema`<sup>Required</sup> <a name="default_schema" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.defaultSchema"></a>

```python
default_schema: str
```

- *Type:* str

---

##### `schema_suffix`<sup>Required</sup> <a name="schema_suffix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.schemaSuffix"></a>

```python
schema_suffix: str
```

- *Type:* str

---

##### `table_prefix`<sup>Required</sup> <a name="table_prefix" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

---

##### `vars`<sup>Required</sup> <a name="vars" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.vars"></a>

```python
vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataformRepositoryReleaseConfigCodeCompilationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigCodeCompilationConfig">GoogleDataformRepositoryReleaseConfigCodeCompilationConfig</a>

---


### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus</a>

---


### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference <a name="GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult">compilation_result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus">error_status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime">release_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compilation_result`<sup>Required</sup> <a name="compilation_result" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.compilationResult"></a>

```python
compilation_result: str
```

- *Type:* str

---

##### `error_status`<sup>Required</sup> <a name="error_status" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.errorStatus"></a>

```python
error_status: GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList</a>

---

##### `release_time`<sup>Required</sup> <a name="release_time" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.releaseTime"></a>

```python
release_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords">GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords</a>

---


### GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference <a name="GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataform_repository_release_config

googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataformRepositoryReleaseConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataformRepositoryReleaseConfig.GoogleDataformRepositoryReleaseConfigTimeouts">GoogleDataformRepositoryReleaseConfigTimeouts</a>]

---



