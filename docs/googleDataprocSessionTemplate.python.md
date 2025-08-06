# `googleDataprocSessionTemplate` Submodule <a name="`googleDataprocSessionTemplate` Submodule" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocSessionTemplate <a name="GoogleDataprocSessionTemplate" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template google_dataproc_session_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplate(
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
  environment_config: GoogleDataprocSessionTemplateEnvironmentConfig = None,
  id: str = None,
  jupyter_session: GoogleDataprocSessionTemplateJupyterSession = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  runtime_config: GoogleDataprocSessionTemplateRuntimeConfig = None,
  spark_connect_session: GoogleDataprocSessionTemplateSparkConnectSession = None,
  timeouts: GoogleDataprocSessionTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.environmentConfig">environment_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#id GoogleDataprocSessionTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.jupyterSession">jupyter_session</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a></code> | jupyter_session block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this session template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | The location in which the session template will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#project GoogleDataprocSessionTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.sparkConnectSession">spark_connect_session</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a></code> | spark_connect_session block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#name GoogleDataprocSessionTemplate#name}

---

##### `environment_config`<sup>Optional</sup> <a name="environment_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.environmentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#environment_config GoogleDataprocSessionTemplate#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#id GoogleDataprocSessionTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jupyter_session`<sup>Optional</sup> <a name="jupyter_session" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.jupyterSession"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

jupyter_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#jupyter_session GoogleDataprocSessionTemplate#jupyter_session}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels to associate with this session template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#labels GoogleDataprocSessionTemplate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.location"></a>

- *Type:* str

The location in which the session template will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#location GoogleDataprocSessionTemplate#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#project GoogleDataprocSessionTemplate#project}.

---

##### `runtime_config`<sup>Optional</sup> <a name="runtime_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.runtimeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#runtime_config GoogleDataprocSessionTemplate#runtime_config}

---

##### `spark_connect_session`<sup>Optional</sup> <a name="spark_connect_session" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.sparkConnectSession"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

spark_connect_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#spark_connect_session GoogleDataprocSessionTemplate#spark_connect_session}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#timeouts GoogleDataprocSessionTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putEnvironmentConfig">put_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putJupyterSession">put_jupyter_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putRuntimeConfig">put_runtime_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putSparkConnectSession">put_spark_connect_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetEnvironmentConfig">reset_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetJupyterSession">reset_jupyter_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetRuntimeConfig">reset_runtime_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetSparkConnectSession">reset_spark_connect_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_environment_config` <a name="put_environment_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putEnvironmentConfig"></a>

```python
def put_environment_config(
  execution_config: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig = None,
  peripherals_config: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig = None
) -> None
```

###### `execution_config`<sup>Optional</sup> <a name="execution_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putEnvironmentConfig.parameter.executionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#execution_config GoogleDataprocSessionTemplate#execution_config}

---

###### `peripherals_config`<sup>Optional</sup> <a name="peripherals_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putEnvironmentConfig.parameter.peripheralsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#peripherals_config GoogleDataprocSessionTemplate#peripherals_config}

---

##### `put_jupyter_session` <a name="put_jupyter_session" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putJupyterSession"></a>

```python
def put_jupyter_session(
  display_name: str = None,
  kernel: str = None
) -> None
```

###### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putJupyterSession.parameter.displayName"></a>

- *Type:* str

Display name, shown in the Jupyter kernelspec card.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#display_name GoogleDataprocSessionTemplate#display_name}

---

###### `kernel`<sup>Optional</sup> <a name="kernel" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putJupyterSession.parameter.kernel"></a>

- *Type:* str

Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#kernel GoogleDataprocSessionTemplate#kernel}

---

##### `put_runtime_config` <a name="put_runtime_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putRuntimeConfig"></a>

```python
def put_runtime_config(
  container_image: str = None,
  properties: typing.Mapping[str] = None,
  version: str = None
) -> None
```

###### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putRuntimeConfig.parameter.containerImage"></a>

- *Type:* str

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#container_image GoogleDataprocSessionTemplate#container_image}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putRuntimeConfig.parameter.properties"></a>

- *Type:* typing.Mapping[str]

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#properties GoogleDataprocSessionTemplate#properties}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putRuntimeConfig.parameter.version"></a>

- *Type:* str

Version of the session runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#version GoogleDataprocSessionTemplate#version}

---

##### `put_spark_connect_session` <a name="put_spark_connect_session" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putSparkConnectSession"></a>

```python
def put_spark_connect_session() -> None
```

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#create GoogleDataprocSessionTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#delete GoogleDataprocSessionTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#update GoogleDataprocSessionTemplate#update}.

---

##### `reset_environment_config` <a name="reset_environment_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetEnvironmentConfig"></a>

```python
def reset_environment_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_jupyter_session` <a name="reset_jupyter_session" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetJupyterSession"></a>

```python
def reset_jupyter_session() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_runtime_config` <a name="reset_runtime_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetRuntimeConfig"></a>

```python
def reset_runtime_config() -> None
```

##### `reset_spark_connect_session` <a name="reset_spark_connect_session" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetSparkConnectSession"></a>

```python
def reset_spark_connect_session() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataprocSessionTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataprocSessionTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataprocSessionTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataprocSessionTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocSessionTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfig">environment_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSession">jupyter_session</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference">GoogleDataprocSessionTemplateJupyterSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference">GoogleDataprocSessionTemplateRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSession">spark_connect_session</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference">GoogleDataprocSessionTemplateSparkConnectSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference">GoogleDataprocSessionTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfigInput">environment_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSessionInput">jupyter_session_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfigInput">runtime_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSessionInput">spark_connect_session_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `environment_config`<sup>Required</sup> <a name="environment_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfig"></a>

```python
environment_config: GoogleDataprocSessionTemplateEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigOutputReference</a>

---

##### `jupyter_session`<sup>Required</sup> <a name="jupyter_session" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSession"></a>

```python
jupyter_session: GoogleDataprocSessionTemplateJupyterSessionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference">GoogleDataprocSessionTemplateJupyterSessionOutputReference</a>

---

##### `runtime_config`<sup>Required</sup> <a name="runtime_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfig"></a>

```python
runtime_config: GoogleDataprocSessionTemplateRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference">GoogleDataprocSessionTemplateRuntimeConfigOutputReference</a>

---

##### `spark_connect_session`<sup>Required</sup> <a name="spark_connect_session" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSession"></a>

```python
spark_connect_session: GoogleDataprocSessionTemplateSparkConnectSessionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference">GoogleDataprocSessionTemplateSparkConnectSessionOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeouts"></a>

```python
timeouts: GoogleDataprocSessionTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference">GoogleDataprocSessionTemplateTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `environment_config_input`<sup>Optional</sup> <a name="environment_config_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfigInput"></a>

```python
environment_config_input: GoogleDataprocSessionTemplateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `jupyter_session_input`<sup>Optional</sup> <a name="jupyter_session_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSessionInput"></a>

```python
jupyter_session_input: GoogleDataprocSessionTemplateJupyterSession
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `runtime_config_input`<sup>Optional</sup> <a name="runtime_config_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfigInput"></a>

```python
runtime_config_input: GoogleDataprocSessionTemplateRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

---

##### `spark_connect_session_input`<sup>Optional</sup> <a name="spark_connect_session_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSessionInput"></a>

```python
spark_connect_session_input: GoogleDataprocSessionTemplateSparkConnectSession
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataprocSessionTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocSessionTemplateConfig <a name="GoogleDataprocSessionTemplateConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  environment_config: GoogleDataprocSessionTemplateEnvironmentConfig = None,
  id: str = None,
  jupyter_session: GoogleDataprocSessionTemplateJupyterSession = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  runtime_config: GoogleDataprocSessionTemplateRuntimeConfig = None,
  spark_connect_session: GoogleDataprocSessionTemplateSparkConnectSession = None,
  timeouts: GoogleDataprocSessionTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.name">name</a></code> | <code>str</code> | The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.environmentConfig">environment_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#id GoogleDataprocSessionTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.jupyterSession">jupyter_session</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a></code> | jupyter_session block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this session template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.location">location</a></code> | <code>str</code> | The location in which the session template will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#project GoogleDataprocSessionTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.sparkConnectSession">spark_connect_session</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a></code> | spark_connect_session block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#name GoogleDataprocSessionTemplate#name}

---

##### `environment_config`<sup>Optional</sup> <a name="environment_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.environmentConfig"></a>

```python
environment_config: GoogleDataprocSessionTemplateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#environment_config GoogleDataprocSessionTemplate#environment_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#id GoogleDataprocSessionTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jupyter_session`<sup>Optional</sup> <a name="jupyter_session" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.jupyterSession"></a>

```python
jupyter_session: GoogleDataprocSessionTemplateJupyterSession
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

jupyter_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#jupyter_session GoogleDataprocSessionTemplate#jupyter_session}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels to associate with this session template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#labels GoogleDataprocSessionTemplate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location in which the session template will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#location GoogleDataprocSessionTemplate#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#project GoogleDataprocSessionTemplate#project}.

---

##### `runtime_config`<sup>Optional</sup> <a name="runtime_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.runtimeConfig"></a>

```python
runtime_config: GoogleDataprocSessionTemplateRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#runtime_config GoogleDataprocSessionTemplate#runtime_config}

---

##### `spark_connect_session`<sup>Optional</sup> <a name="spark_connect_session" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.sparkConnectSession"></a>

```python
spark_connect_session: GoogleDataprocSessionTemplateSparkConnectSession
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

spark_connect_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#spark_connect_session GoogleDataprocSessionTemplate#spark_connect_session}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.timeouts"></a>

```python
timeouts: GoogleDataprocSessionTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#timeouts GoogleDataprocSessionTemplate#timeouts}

---

### GoogleDataprocSessionTemplateEnvironmentConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig(
  execution_config: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig = None,
  peripherals_config: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.executionConfig">execution_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig">peripherals_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `execution_config`<sup>Optional</sup> <a name="execution_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.executionConfig"></a>

```python
execution_config: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#execution_config GoogleDataprocSessionTemplate#execution_config}

---

##### `peripherals_config`<sup>Optional</sup> <a name="peripherals_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig"></a>

```python
peripherals_config: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#peripherals_config GoogleDataprocSessionTemplate#peripherals_config}

---

### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig(
  authentication_config: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig = None,
  idle_ttl: str = None,
  kms_key: str = None,
  network_tags: typing.List[str] = None,
  service_account: str = None,
  staging_bucket: str = None,
  subnetwork_uri: str = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.authenticationConfig">authentication_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | authentication_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.idleTtl">idle_ttl</a></code> | <code>str</code> | The duration to keep the session alive while it's idling. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | Tags used for network traffic control. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account that used to execute workload. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket">staging_bucket</a></code> | <code>str</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri">subnetwork_uri</a></code> | <code>str</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl">ttl</a></code> | <code>str</code> | The duration after which the workload will be terminated. |

---

##### `authentication_config`<sup>Optional</sup> <a name="authentication_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.authenticationConfig"></a>

```python
authentication_config: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#authentication_config GoogleDataprocSessionTemplate#authentication_config}

---

##### `idle_ttl`<sup>Optional</sup> <a name="idle_ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.idleTtl"></a>

```python
idle_ttl: str
```

- *Type:* str

The duration to keep the session alive while it's idling.

Exceeding this threshold causes the session to terminate. Minimum value is 10 minutes; maximum value is 14 day.
Defaults to 1 hour if not set. If both ttl and idleTtl are specified for an interactive session, the conditions
are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or when ttl has
been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#idle_ttl GoogleDataprocSessionTemplate#idle_ttl}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#kms_key GoogleDataprocSessionTemplate#kms_key}

---

##### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#network_tags GoogleDataprocSessionTemplate#network_tags}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#service_account GoogleDataprocSessionTemplate#service_account}

---

##### `staging_bucket`<sup>Optional</sup> <a name="staging_bucket" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```python
staging_bucket: str
```

- *Type:* str

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#staging_bucket GoogleDataprocSessionTemplate#staging_bucket}

---

##### `subnetwork_uri`<sup>Optional</sup> <a name="subnetwork_uri" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```python
subnetwork_uri: str
```

- *Type:* str

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#subnetwork_uri GoogleDataprocSessionTemplate#subnetwork_uri}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a session workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#ttl GoogleDataprocSessionTemplate#ttl}

---

### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig(
  user_workload_authentication_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig.property.userWorkloadAuthenticationType">user_workload_authentication_type</a></code> | <code>str</code> | Authentication type for the user workload running in containers. Possible values: ["SERVICE_ACCOUNT", "END_USER_CREDENTIALS"]. |

---

##### `user_workload_authentication_type`<sup>Optional</sup> <a name="user_workload_authentication_type" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig.property.userWorkloadAuthenticationType"></a>

```python
user_workload_authentication_type: str
```

- *Type:* str

Authentication type for the user workload running in containers. Possible values: ["SERVICE_ACCOUNT", "END_USER_CREDENTIALS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#user_workload_authentication_type GoogleDataprocSessionTemplate#user_workload_authentication_type}

---

### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig(
  metastore_service: str = None,
  spark_history_server_config: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService">metastore_service</a></code> | <code>str</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">spark_history_server_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastore_service`<sup>Optional</sup> <a name="metastore_service" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```python
metastore_service: str
```

- *Type:* str

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#metastore_service GoogleDataprocSessionTemplate#metastore_service}

---

##### `spark_history_server_config`<sup>Optional</sup> <a name="spark_history_server_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```python
spark_history_server_config: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#spark_history_server_config GoogleDataprocSessionTemplate#spark_history_server_config}

---

### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig(
  dataproc_cluster: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">dataproc_cluster</a></code> | <code>str</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `dataproc_cluster`<sup>Optional</sup> <a name="dataproc_cluster" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```python
dataproc_cluster: str
```

- *Type:* str

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#dataproc_cluster GoogleDataprocSessionTemplate#dataproc_cluster}

---

### GoogleDataprocSessionTemplateJupyterSession <a name="GoogleDataprocSessionTemplateJupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession(
  display_name: str = None,
  kernel: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.displayName">display_name</a></code> | <code>str</code> | Display name, shown in the Jupyter kernelspec card. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.kernel">kernel</a></code> | <code>str</code> | Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"]. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name, shown in the Jupyter kernelspec card.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#display_name GoogleDataprocSessionTemplate#display_name}

---

##### `kernel`<sup>Optional</sup> <a name="kernel" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.kernel"></a>

```python
kernel: str
```

- *Type:* str

Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#kernel GoogleDataprocSessionTemplate#kernel}

---

### GoogleDataprocSessionTemplateRuntimeConfig <a name="GoogleDataprocSessionTemplateRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig(
  container_image: str = None,
  properties: typing.Mapping[str] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.containerImage">container_image</a></code> | <code>str</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.version">version</a></code> | <code>str</code> | Version of the session runtime. |

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.containerImage"></a>

```python
container_image: str
```

- *Type:* str

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#container_image GoogleDataprocSessionTemplate#container_image}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#properties GoogleDataprocSessionTemplate#properties}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the session runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#version GoogleDataprocSessionTemplate#version}

---

### GoogleDataprocSessionTemplateSparkConnectSession <a name="GoogleDataprocSessionTemplateSparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession()
```


### GoogleDataprocSessionTemplateTimeouts <a name="GoogleDataprocSessionTemplateTimeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#create GoogleDataprocSessionTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#delete GoogleDataprocSessionTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#update GoogleDataprocSessionTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#create GoogleDataprocSessionTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#delete GoogleDataprocSessionTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#update GoogleDataprocSessionTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resetUserWorkloadAuthenticationType">reset_user_workload_authentication_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_user_workload_authentication_type` <a name="reset_user_workload_authentication_type" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resetUserWorkloadAuthenticationType"></a>

```python
def reset_user_workload_authentication_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationTypeInput">user_workload_authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationType">user_workload_authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_workload_authentication_type_input`<sup>Optional</sup> <a name="user_workload_authentication_type_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationTypeInput"></a>

```python
user_workload_authentication_type_input: str
```

- *Type:* str

---

##### `user_workload_authentication_type`<sup>Required</sup> <a name="user_workload_authentication_type" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationType"></a>

```python
user_workload_authentication_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig">put_authentication_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetAuthenticationConfig">reset_authentication_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetIdleTtl">reset_idle_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">reset_network_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">reset_staging_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">reset_subnetwork_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication_config` <a name="put_authentication_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig"></a>

```python
def put_authentication_config(
  user_workload_authentication_type: str = None
) -> None
```

###### `user_workload_authentication_type`<sup>Optional</sup> <a name="user_workload_authentication_type" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig.parameter.userWorkloadAuthenticationType"></a>

- *Type:* str

Authentication type for the user workload running in containers. Possible values: ["SERVICE_ACCOUNT", "END_USER_CREDENTIALS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#user_workload_authentication_type GoogleDataprocSessionTemplate#user_workload_authentication_type}

---

##### `reset_authentication_config` <a name="reset_authentication_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetAuthenticationConfig"></a>

```python
def reset_authentication_config() -> None
```

##### `reset_idle_ttl` <a name="reset_idle_ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetIdleTtl"></a>

```python
def reset_idle_ttl() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_network_tags` <a name="reset_network_tags" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```python
def reset_network_tags() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_staging_bucket` <a name="reset_staging_bucket" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```python
def reset_staging_bucket() -> None
```

##### `reset_subnetwork_uri` <a name="reset_subnetwork_uri" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```python
def reset_subnetwork_uri() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfig">authentication_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfigInput">authentication_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtlInput">idle_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">network_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">staging_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">subnetwork_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtl">idle_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">staging_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">subnetwork_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_config`<sup>Required</sup> <a name="authentication_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfig"></a>

```python
authentication_config: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference</a>

---

##### `authentication_config_input`<sup>Optional</sup> <a name="authentication_config_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfigInput"></a>

```python
authentication_config_input: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

---

##### `idle_ttl_input`<sup>Optional</sup> <a name="idle_ttl_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtlInput"></a>

```python
idle_ttl_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `network_tags_input`<sup>Optional</sup> <a name="network_tags_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```python
network_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `staging_bucket_input`<sup>Optional</sup> <a name="staging_bucket_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```python
staging_bucket_input: str
```

- *Type:* str

---

##### `subnetwork_uri_input`<sup>Optional</sup> <a name="subnetwork_uri_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```python
subnetwork_uri_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `idle_ttl`<sup>Required</sup> <a name="idle_ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtl"></a>

```python
idle_ttl: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `network_tags`<sup>Required</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `staging_bucket`<sup>Required</sup> <a name="staging_bucket" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```python
staging_bucket: str
```

- *Type:* str

---

##### `subnetwork_uri`<sup>Required</sup> <a name="subnetwork_uri" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```python
subnetwork_uri: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig">put_execution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig">put_peripherals_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig">reset_execution_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig">reset_peripherals_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_execution_config` <a name="put_execution_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig"></a>

```python
def put_execution_config(
  authentication_config: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig = None,
  idle_ttl: str = None,
  kms_key: str = None,
  network_tags: typing.List[str] = None,
  service_account: str = None,
  staging_bucket: str = None,
  subnetwork_uri: str = None,
  ttl: str = None
) -> None
```

###### `authentication_config`<sup>Optional</sup> <a name="authentication_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.authenticationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#authentication_config GoogleDataprocSessionTemplate#authentication_config}

---

###### `idle_ttl`<sup>Optional</sup> <a name="idle_ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.idleTtl"></a>

- *Type:* str

The duration to keep the session alive while it's idling.

Exceeding this threshold causes the session to terminate. Minimum value is 10 minutes; maximum value is 14 day.
Defaults to 1 hour if not set. If both ttl and idleTtl are specified for an interactive session, the conditions
are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or when ttl has
been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#idle_ttl GoogleDataprocSessionTemplate#idle_ttl}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.kmsKey"></a>

- *Type:* str

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#kms_key GoogleDataprocSessionTemplate#kms_key}

---

###### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.networkTags"></a>

- *Type:* typing.List[str]

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#network_tags GoogleDataprocSessionTemplate#network_tags}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.serviceAccount"></a>

- *Type:* str

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#service_account GoogleDataprocSessionTemplate#service_account}

---

###### `staging_bucket`<sup>Optional</sup> <a name="staging_bucket" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.stagingBucket"></a>

- *Type:* str

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#staging_bucket GoogleDataprocSessionTemplate#staging_bucket}

---

###### `subnetwork_uri`<sup>Optional</sup> <a name="subnetwork_uri" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.subnetworkUri"></a>

- *Type:* str

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#subnetwork_uri GoogleDataprocSessionTemplate#subnetwork_uri}

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.ttl"></a>

- *Type:* str

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a session workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#ttl GoogleDataprocSessionTemplate#ttl}

---

##### `put_peripherals_config` <a name="put_peripherals_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```python
def put_peripherals_config(
  metastore_service: str = None,
  spark_history_server_config: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig = None
) -> None
```

###### `metastore_service`<sup>Optional</sup> <a name="metastore_service" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.metastoreService"></a>

- *Type:* str

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#metastore_service GoogleDataprocSessionTemplate#metastore_service}

---

###### `spark_history_server_config`<sup>Optional</sup> <a name="spark_history_server_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.sparkHistoryServerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#spark_history_server_config GoogleDataprocSessionTemplate#spark_history_server_config}

---

##### `reset_execution_config` <a name="reset_execution_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```python
def reset_execution_config() -> None
```

##### `reset_peripherals_config` <a name="reset_peripherals_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```python
def reset_peripherals_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig">execution_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig">peripherals_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput">execution_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput">peripherals_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_config`<sup>Required</sup> <a name="execution_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig"></a>

```python
execution_config: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `peripherals_config`<sup>Required</sup> <a name="peripherals_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```python
peripherals_config: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `execution_config_input`<sup>Optional</sup> <a name="execution_config_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```python
execution_config_input: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---

##### `peripherals_config_input`<sup>Optional</sup> <a name="peripherals_config_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```python
peripherals_config_input: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocSessionTemplateEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">put_spark_history_server_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">reset_metastore_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">reset_spark_history_server_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_spark_history_server_config` <a name="put_spark_history_server_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```python
def put_spark_history_server_config(
  dataproc_cluster: str = None
) -> None
```

###### `dataproc_cluster`<sup>Optional</sup> <a name="dataproc_cluster" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.dataprocCluster"></a>

- *Type:* str

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#dataproc_cluster GoogleDataprocSessionTemplate#dataproc_cluster}

---

##### `reset_metastore_service` <a name="reset_metastore_service" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```python
def reset_metastore_service() -> None
```

##### `reset_spark_history_server_config` <a name="reset_spark_history_server_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```python
def reset_spark_history_server_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">spark_history_server_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">metastore_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">spark_history_server_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">metastore_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spark_history_server_config`<sup>Required</sup> <a name="spark_history_server_config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```python
spark_history_server_config: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `metastore_service_input`<sup>Optional</sup> <a name="metastore_service_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```python
metastore_service_input: str
```

- *Type:* str

---

##### `spark_history_server_config_input`<sup>Optional</sup> <a name="spark_history_server_config_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```python
spark_history_server_config_input: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `metastore_service`<sup>Required</sup> <a name="metastore_service" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```python
metastore_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">reset_dataproc_cluster</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataproc_cluster` <a name="reset_dataproc_cluster" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```python
def reset_dataproc_cluster() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataproc_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataproc_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataproc_cluster_input`<sup>Optional</sup> <a name="dataproc_cluster_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```python
dataproc_cluster_input: str
```

- *Type:* str

---

##### `dataproc_cluster`<sup>Required</sup> <a name="dataproc_cluster" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```python
dataproc_cluster: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### GoogleDataprocSessionTemplateJupyterSessionOutputReference <a name="GoogleDataprocSessionTemplateJupyterSessionOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetKernel">reset_kernel</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_kernel` <a name="reset_kernel" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetKernel"></a>

```python
def reset_kernel() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput">kernel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernel">kernel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `kernel_input`<sup>Optional</sup> <a name="kernel_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput"></a>

```python
kernel_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `kernel`<sup>Required</sup> <a name="kernel" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernel"></a>

```python
kernel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocSessionTemplateJupyterSession
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

---


### GoogleDataprocSessionTemplateRuntimeConfigOutputReference <a name="GoogleDataprocSessionTemplateRuntimeConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties">effective_properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput">container_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage">container_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_properties`<sup>Required</sup> <a name="effective_properties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties"></a>

```python
effective_properties: StringMap
```

- *Type:* cdktf.StringMap

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput"></a>

```python
container_image_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage"></a>

```python
container_image: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocSessionTemplateRuntimeConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

---


### GoogleDataprocSessionTemplateSparkConnectSessionOutputReference <a name="GoogleDataprocSessionTemplateSparkConnectSessionOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocSessionTemplateSparkConnectSession
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

---


### GoogleDataprocSessionTemplateTimeoutsOutputReference <a name="GoogleDataprocSessionTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_session_template

googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataprocSessionTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>]

---



