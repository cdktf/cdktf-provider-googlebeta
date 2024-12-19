# `googleTranscoderJob` Submodule <a name="`googleTranscoderJob` Submodule" id="@cdktf/provider-google-beta.googleTranscoderJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleTranscoderJob <a name="GoogleTranscoderJob" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job google_transcoder_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJob(
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
  config: GoogleTranscoderJobConfigA = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  template_id: str = None,
  timeouts: GoogleTranscoderJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the transcoding job resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#id GoogleTranscoderJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#project GoogleTranscoderJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.location"></a>

- *Type:* str

The location of the transcoding job resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#location GoogleTranscoderJob#location}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#config GoogleTranscoderJob#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#id GoogleTranscoderJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#labels GoogleTranscoderJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#project GoogleTranscoderJob#project}.

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.templateId"></a>

- *Type:* str

Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#template_id GoogleTranscoderJob#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#timeouts GoogleTranscoderJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetTemplateId">reset_template_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig"></a>

```python
def put_config(
  ad_breaks: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigAdBreaks]] = None,
  edit_list: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEditListStruct]] = None,
  elementary_streams: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigElementaryStreams]] = None,
  encryptions: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEncryptions]] = None,
  inputs: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigInputs]] = None,
  manifests: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigManifests]] = None,
  mux_streams: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigMuxStreams]] = None,
  output: GoogleTranscoderJobConfigOutput = None,
  overlays: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigOverlays]] = None,
  pubsub_destination: GoogleTranscoderJobConfigPubsubDestination = None
) -> None
```

###### `ad_breaks`<sup>Optional</sup> <a name="ad_breaks" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig.parameter.adBreaks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>]]

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#ad_breaks GoogleTranscoderJob#ad_breaks}

---

###### `edit_list`<sup>Optional</sup> <a name="edit_list" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig.parameter.editList"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>]]

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#edit_list GoogleTranscoderJob#edit_list}

---

###### `elementary_streams`<sup>Optional</sup> <a name="elementary_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig.parameter.elementaryStreams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>]]

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#elementary_streams GoogleTranscoderJob#elementary_streams}

---

###### `encryptions`<sup>Optional</sup> <a name="encryptions" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig.parameter.encryptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>]]

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#encryptions GoogleTranscoderJob#encryptions}

---

###### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig.parameter.inputs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>]]

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#inputs GoogleTranscoderJob#inputs}

---

###### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig.parameter.manifests"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>]]

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#manifests GoogleTranscoderJob#manifests}

---

###### `mux_streams`<sup>Optional</sup> <a name="mux_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig.parameter.muxStreams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>]]

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#mux_streams GoogleTranscoderJob#mux_streams}

---

###### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig.parameter.output"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#output GoogleTranscoderJob#output}

---

###### `overlays`<sup>Optional</sup> <a name="overlays" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig.parameter.overlays"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>]]

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#overlays GoogleTranscoderJob#overlays}

---

###### `pubsub_destination`<sup>Optional</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig.parameter.pubsubDestination"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#pubsub_destination GoogleTranscoderJob#pubsub_destination}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#create GoogleTranscoderJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#delete GoogleTranscoderJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#update GoogleTranscoderJob#update}.

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_template_id` <a name="reset_template_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetTemplateId"></a>

```python
def reset_template_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleTranscoderJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleTranscoderJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleTranscoderJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleTranscoderJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleTranscoderJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference">GoogleTranscoderJobConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference">GoogleTranscoderJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.config"></a>

```python
config: GoogleTranscoderJobConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference">GoogleTranscoderJobConfigAOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.timeouts"></a>

```python
timeouts: GoogleTranscoderJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference">GoogleTranscoderJobTimeoutsOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.configInput"></a>

```python
config_input: GoogleTranscoderJobConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleTranscoderJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleTranscoderJobConfig <a name="GoogleTranscoderJobConfig" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  config: GoogleTranscoderJobConfigA = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  template_id: str = None,
  timeouts: GoogleTranscoderJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.location">location</a></code> | <code>str</code> | The location of the transcoding job resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#id GoogleTranscoderJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#project GoogleTranscoderJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.templateId">template_id</a></code> | <code>str</code> | Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the transcoding job resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#location GoogleTranscoderJob#location}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.config"></a>

```python
config: GoogleTranscoderJobConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#config GoogleTranscoderJob#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#id GoogleTranscoderJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#labels GoogleTranscoderJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#project GoogleTranscoderJob#project}.

---

##### `template_id`<sup>Optional</sup> <a name="template_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#template_id GoogleTranscoderJob#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.timeouts"></a>

```python
timeouts: GoogleTranscoderJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#timeouts GoogleTranscoderJob#timeouts}

---

### GoogleTranscoderJobConfigA <a name="GoogleTranscoderJobConfigA" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigA(
  ad_breaks: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigAdBreaks]] = None,
  edit_list: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEditListStruct]] = None,
  elementary_streams: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigElementaryStreams]] = None,
  encryptions: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEncryptions]] = None,
  inputs: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigInputs]] = None,
  manifests: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigManifests]] = None,
  mux_streams: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigMuxStreams]] = None,
  output: GoogleTranscoderJobConfigOutput = None,
  overlays: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigOverlays]] = None,
  pubsub_destination: GoogleTranscoderJobConfigPubsubDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.adBreaks">ad_breaks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>]]</code> | ad_breaks block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.editList">edit_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>]]</code> | edit_list block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.elementaryStreams">elementary_streams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>]]</code> | elementary_streams block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.encryptions">encryptions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>]]</code> | encryptions block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.inputs">inputs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>]]</code> | inputs block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.manifests">manifests</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>]]</code> | manifests block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.muxStreams">mux_streams</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>]]</code> | mux_streams block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.output">output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.overlays">overlays</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>]]</code> | overlays block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `ad_breaks`<sup>Optional</sup> <a name="ad_breaks" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.adBreaks"></a>

```python
ad_breaks: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigAdBreaks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>]]

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#ad_breaks GoogleTranscoderJob#ad_breaks}

---

##### `edit_list`<sup>Optional</sup> <a name="edit_list" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.editList"></a>

```python
edit_list: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEditListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>]]

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#edit_list GoogleTranscoderJob#edit_list}

---

##### `elementary_streams`<sup>Optional</sup> <a name="elementary_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.elementaryStreams"></a>

```python
elementary_streams: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigElementaryStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>]]

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#elementary_streams GoogleTranscoderJob#elementary_streams}

---

##### `encryptions`<sup>Optional</sup> <a name="encryptions" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.encryptions"></a>

```python
encryptions: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEncryptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>]]

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#encryptions GoogleTranscoderJob#encryptions}

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.inputs"></a>

```python
inputs: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigInputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>]]

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#inputs GoogleTranscoderJob#inputs}

---

##### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.manifests"></a>

```python
manifests: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigManifests]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>]]

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#manifests GoogleTranscoderJob#manifests}

---

##### `mux_streams`<sup>Optional</sup> <a name="mux_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.muxStreams"></a>

```python
mux_streams: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigMuxStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>]]

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#mux_streams GoogleTranscoderJob#mux_streams}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.output"></a>

```python
output: GoogleTranscoderJobConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#output GoogleTranscoderJob#output}

---

##### `overlays`<sup>Optional</sup> <a name="overlays" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.overlays"></a>

```python
overlays: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigOverlays]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>]]

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#overlays GoogleTranscoderJob#overlays}

---

##### `pubsub_destination`<sup>Optional</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.pubsubDestination"></a>

```python
pubsub_destination: GoogleTranscoderJobConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#pubsub_destination GoogleTranscoderJob#pubsub_destination}

---

### GoogleTranscoderJobConfigAdBreaks <a name="GoogleTranscoderJobConfigAdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks(
  start_time_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | Start time in seconds for the ad break, relative to the output file timeline. |

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

Start time in seconds for the ad break, relative to the output file timeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#start_time_offset GoogleTranscoderJob#start_time_offset}

---

### GoogleTranscoderJobConfigEditListStruct <a name="GoogleTranscoderJobConfigEditListStruct" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct(
  inputs: typing.List[str] = None,
  key: str = None,
  start_time_offset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.inputs">inputs</a></code> | <code>typing.List[str]</code> | List of values identifying files that should be used in this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.key">key</a></code> | <code>str</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | Start time in seconds for the atom, relative to the input file timeline. The default is '0s'. |

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.inputs"></a>

```python
inputs: typing.List[str]
```

- *Type:* typing.List[str]

List of values identifying files that should be used in this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#inputs GoogleTranscoderJob#inputs}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#key GoogleTranscoderJob#key}

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

Start time in seconds for the atom, relative to the input file timeline. The default is '0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#start_time_offset GoogleTranscoderJob#start_time_offset}

---

### GoogleTranscoderJobConfigElementaryStreams <a name="GoogleTranscoderJobConfigElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams(
  audio_stream: GoogleTranscoderJobConfigElementaryStreamsAudioStream = None,
  key: str = None,
  video_stream: GoogleTranscoderJobConfigElementaryStreamsVideoStream = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.audioStream">audio_stream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a></code> | audio_stream block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.key">key</a></code> | <code>str</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.videoStream">video_stream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a></code> | video_stream block. |

---

##### `audio_stream`<sup>Optional</sup> <a name="audio_stream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.audioStream"></a>

```python
audio_stream: GoogleTranscoderJobConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a>

audio_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#audio_stream GoogleTranscoderJob#audio_stream}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#key GoogleTranscoderJob#key}

---

##### `video_stream`<sup>Optional</sup> <a name="video_stream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.videoStream"></a>

```python
video_stream: GoogleTranscoderJobConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a>

video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#video_stream GoogleTranscoderJob#video_stream}

---

### GoogleTranscoderJobConfigElementaryStreamsAudioStream <a name="GoogleTranscoderJobConfigElementaryStreamsAudioStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream(
  bitrate_bps: typing.Union[int, float],
  channel_count: typing.Union[int, float] = None,
  channel_layout: typing.List[str] = None,
  codec: str = None,
  sample_rate_hertz: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | Audio bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.channelCount">channel_count</a></code> | <code>typing.Union[int, float]</code> | Number of audio channels. The default is '2'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.channelLayout">channel_layout</a></code> | <code>typing.List[str]</code> | A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"]. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.codec">codec</a></code> | <code>str</code> | The codec for this audio stream. The default is 'aac'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.sampleRateHertz">sample_rate_hertz</a></code> | <code>typing.Union[int, float]</code> | The audio sample rate in Hertz. The default is '48000'. |

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#bitrate_bps GoogleTranscoderJob#bitrate_bps}

---

##### `channel_count`<sup>Optional</sup> <a name="channel_count" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.channelCount"></a>

```python
channel_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#channel_count GoogleTranscoderJob#channel_count}

---

##### `channel_layout`<sup>Optional</sup> <a name="channel_layout" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.channelLayout"></a>

```python
channel_layout: typing.List[str]
```

- *Type:* typing.List[str]

A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#channel_layout GoogleTranscoderJob#channel_layout}

---

##### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.codec"></a>

```python
codec: str
```

- *Type:* str

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#codec GoogleTranscoderJob#codec}

---

##### `sample_rate_hertz`<sup>Optional</sup> <a name="sample_rate_hertz" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.sampleRateHertz"></a>

```python
sample_rate_hertz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#sample_rate_hertz GoogleTranscoderJob#sample_rate_hertz}

---

### GoogleTranscoderJobConfigElementaryStreamsVideoStream <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream(
  h264: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream.property.h264">h264</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | h264 block. |

---

##### `h264`<sup>Optional</sup> <a name="h264" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream.property.h264"></a>

```python
h264: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#h264 GoogleTranscoderJob#h264}

---

### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264 <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264(
  bitrate_bps: typing.Union[int, float],
  frame_rate: typing.Union[int, float],
  crf_level: typing.Union[int, float] = None,
  entropy_coder: str = None,
  gop_duration: str = None,
  height_pixels: typing.Union[int, float] = None,
  hlg: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg = None,
  pixel_format: str = None,
  preset: str = None,
  profile: str = None,
  rate_control_mode: str = None,
  sdr: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr = None,
  vbv_fullness_bits: typing.Union[int, float] = None,
  vbv_size_bits: typing.Union[int, float] = None,
  width_pixels: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | The video bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.frameRate">frame_rate</a></code> | <code>typing.Union[int, float]</code> | The target video frame rate in frames per second (FPS). |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.crfLevel">crf_level</a></code> | <code>typing.Union[int, float]</code> | Target CRF level. The default is '21'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.entropyCoder">entropy_coder</a></code> | <code>str</code> | The entropy coder to use. The default is 'cabac'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.gopDuration">gop_duration</a></code> | <code>str</code> | Select the GOP size based on the specified duration. The default is '3s'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.heightPixels">height_pixels</a></code> | <code>typing.Union[int, float]</code> | The height of the video in pixels. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.hlg">hlg</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | hlg block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.pixelFormat">pixel_format</a></code> | <code>str</code> | Pixel format to use. The default is 'yuv420p'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.preset">preset</a></code> | <code>str</code> | Enforces the specified codec preset. The default is 'veryfast'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.profile">profile</a></code> | <code>str</code> | Enforces the specified codec profile. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.rateControlMode">rate_control_mode</a></code> | <code>str</code> | Specify the mode. The default is 'vbr'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.sdr">sdr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | sdr block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits">vbv_fullness_bits</a></code> | <code>typing.Union[int, float]</code> | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits">vbv_size_bits</a></code> | <code>typing.Union[int, float]</code> | Size of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.widthPixels">width_pixels</a></code> | <code>typing.Union[int, float]</code> | The width of the video in pixels. |

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#bitrate_bps GoogleTranscoderJob#bitrate_bps}

---

##### `frame_rate`<sup>Required</sup> <a name="frame_rate" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.frameRate"></a>

```python
frame_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#frame_rate GoogleTranscoderJob#frame_rate}

---

##### `crf_level`<sup>Optional</sup> <a name="crf_level" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.crfLevel"></a>

```python
crf_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#crf_level GoogleTranscoderJob#crf_level}

---

##### `entropy_coder`<sup>Optional</sup> <a name="entropy_coder" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.entropyCoder"></a>

```python
entropy_coder: str
```

- *Type:* str

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#entropy_coder GoogleTranscoderJob#entropy_coder}

---

##### `gop_duration`<sup>Optional</sup> <a name="gop_duration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.gopDuration"></a>

```python
gop_duration: str
```

- *Type:* str

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#gop_duration GoogleTranscoderJob#gop_duration}

---

##### `height_pixels`<sup>Optional</sup> <a name="height_pixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.heightPixels"></a>

```python
height_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#height_pixels GoogleTranscoderJob#height_pixels}

---

##### `hlg`<sup>Optional</sup> <a name="hlg" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.hlg"></a>

```python
hlg: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#hlg GoogleTranscoderJob#hlg}

---

##### `pixel_format`<sup>Optional</sup> <a name="pixel_format" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.pixelFormat"></a>

```python
pixel_format: str
```

- *Type:* str

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#pixel_format GoogleTranscoderJob#pixel_format}

---

##### `preset`<sup>Optional</sup> <a name="preset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.preset"></a>

```python
preset: str
```

- *Type:* str

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#preset GoogleTranscoderJob#preset}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.profile"></a>

```python
profile: str
```

- *Type:* str

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#profile GoogleTranscoderJob#profile}

---

##### `rate_control_mode`<sup>Optional</sup> <a name="rate_control_mode" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.rateControlMode"></a>

```python
rate_control_mode: str
```

- *Type:* str

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#rate_control_mode GoogleTranscoderJob#rate_control_mode}

---

##### `sdr`<sup>Optional</sup> <a name="sdr" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.sdr"></a>

```python
sdr: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#sdr GoogleTranscoderJob#sdr}

---

##### `vbv_fullness_bits`<sup>Optional</sup> <a name="vbv_fullness_bits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits"></a>

```python
vbv_fullness_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#vbv_fullness_bits GoogleTranscoderJob#vbv_fullness_bits}

---

##### `vbv_size_bits`<sup>Optional</sup> <a name="vbv_size_bits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits"></a>

```python
vbv_size_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#vbv_size_bits GoogleTranscoderJob#vbv_size_bits}

---

##### `width_pixels`<sup>Optional</sup> <a name="width_pixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.widthPixels"></a>

```python
width_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#width_pixels GoogleTranscoderJob#width_pixels}

---

### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg()
```


### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr()
```


### GoogleTranscoderJobConfigEncryptions <a name="GoogleTranscoderJobConfigEncryptions" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptions(
  id: str,
  aes128: GoogleTranscoderJobConfigEncryptionsAes128 = None,
  drm_systems: GoogleTranscoderJobConfigEncryptionsDrmSystems = None,
  mpeg_cenc: GoogleTranscoderJobConfigEncryptionsMpegCenc = None,
  sample_aes: GoogleTranscoderJobConfigEncryptionsSampleAes = None,
  secret_manager_key_source: GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.id">id</a></code> | <code>str</code> | Identifier for this set of encryption options. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.aes128">aes128</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a></code> | aes128 block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.drmSystems">drm_systems</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a></code> | drm_systems block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.mpegCenc">mpeg_cenc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a></code> | mpeg_cenc block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.sampleAes">sample_aes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a></code> | sample_aes block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.secretManagerKeySource">secret_manager_key_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | secret_manager_key_source block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.id"></a>

```python
id: str
```

- *Type:* str

Identifier for this set of encryption options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#id GoogleTranscoderJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `aes128`<sup>Optional</sup> <a name="aes128" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.aes128"></a>

```python
aes128: GoogleTranscoderJobConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a>

aes128 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#aes128 GoogleTranscoderJob#aes128}

---

##### `drm_systems`<sup>Optional</sup> <a name="drm_systems" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.drmSystems"></a>

```python
drm_systems: GoogleTranscoderJobConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a>

drm_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#drm_systems GoogleTranscoderJob#drm_systems}

---

##### `mpeg_cenc`<sup>Optional</sup> <a name="mpeg_cenc" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.mpegCenc"></a>

```python
mpeg_cenc: GoogleTranscoderJobConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a>

mpeg_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#mpeg_cenc GoogleTranscoderJob#mpeg_cenc}

---

##### `sample_aes`<sup>Optional</sup> <a name="sample_aes" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.sampleAes"></a>

```python
sample_aes: GoogleTranscoderJobConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a>

sample_aes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#sample_aes GoogleTranscoderJob#sample_aes}

---

##### `secret_manager_key_source`<sup>Optional</sup> <a name="secret_manager_key_source" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.secretManagerKeySource"></a>

```python
secret_manager_key_source: GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a>

secret_manager_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#secret_manager_key_source GoogleTranscoderJob#secret_manager_key_source}

---

### GoogleTranscoderJobConfigEncryptionsAes128 <a name="GoogleTranscoderJobConfigEncryptionsAes128" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128()
```


### GoogleTranscoderJobConfigEncryptionsDrmSystems <a name="GoogleTranscoderJobConfigEncryptionsDrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems(
  clearkey: GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey = None,
  fairplay: GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay = None,
  playready: GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready = None,
  widevine: GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.clearkey">clearkey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | clearkey block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.fairplay">fairplay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | fairplay block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.playready">playready</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | playready block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.widevine">widevine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | widevine block. |

---

##### `clearkey`<sup>Optional</sup> <a name="clearkey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.clearkey"></a>

```python
clearkey: GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#clearkey GoogleTranscoderJob#clearkey}

---

##### `fairplay`<sup>Optional</sup> <a name="fairplay" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.fairplay"></a>

```python
fairplay: GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#fairplay GoogleTranscoderJob#fairplay}

---

##### `playready`<sup>Optional</sup> <a name="playready" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.playready"></a>

```python
playready: GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#playready GoogleTranscoderJob#playready}

---

##### `widevine`<sup>Optional</sup> <a name="widevine" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.widevine"></a>

```python
widevine: GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#widevine GoogleTranscoderJob#widevine}

---

### GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey()
```


### GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay()
```


### GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready()
```


### GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine()
```


### GoogleTranscoderJobConfigEncryptionsMpegCenc <a name="GoogleTranscoderJobConfigEncryptionsMpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc(
  scheme: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc.property.scheme">scheme</a></code> | <code>str</code> | Specify the encryption scheme. |

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#scheme GoogleTranscoderJob#scheme}

---

### GoogleTranscoderJobConfigEncryptionsSampleAes <a name="GoogleTranscoderJobConfigEncryptionsSampleAes" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes()
```


### GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource <a name="GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource(
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource.property.secretVersion">secret_version</a></code> | <code>str</code> | The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}. |

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#secret_version GoogleTranscoderJob#secret_version}

---

### GoogleTranscoderJobConfigInputs <a name="GoogleTranscoderJobConfigInputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigInputs(
  key: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs.property.key">key</a></code> | <code>str</code> | A unique key for this input. Must be specified when using advanced mapping and edit lists. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs.property.uri">uri</a></code> | <code>str</code> | URI of the media. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this input. Must be specified when using advanced mapping and edit lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#key GoogleTranscoderJob#key}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs.property.uri"></a>

```python
uri: str
```

- *Type:* str

URI of the media.

Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
If empty, the value is populated from Job.input_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#uri GoogleTranscoderJob#uri}

---

### GoogleTranscoderJobConfigManifests <a name="GoogleTranscoderJobConfigManifests" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigManifests(
  file_name: str = None,
  mux_streams: typing.List[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.fileName">file_name</a></code> | <code>str</code> | The name of the generated file. The default is 'manifest'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.muxStreams">mux_streams</a></code> | <code>typing.List[str]</code> | List of user supplied MuxStream.key values that should appear in this manifest. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.type">type</a></code> | <code>str</code> | Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]. |

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

The name of the generated file. The default is 'manifest'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#file_name GoogleTranscoderJob#file_name}

---

##### `mux_streams`<sup>Optional</sup> <a name="mux_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.muxStreams"></a>

```python
mux_streams: typing.List[str]
```

- *Type:* typing.List[str]

List of user supplied MuxStream.key values that should appear in this manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#mux_streams GoogleTranscoderJob#mux_streams}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#type GoogleTranscoderJob#type}

---

### GoogleTranscoderJobConfigMuxStreams <a name="GoogleTranscoderJobConfigMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams(
  container: str = None,
  elementary_streams: typing.List[str] = None,
  encryption_id: str = None,
  file_name: str = None,
  key: str = None,
  segment_settings: GoogleTranscoderJobConfigMuxStreamsSegmentSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.container">container</a></code> | <code>str</code> | The container format. The default is 'mp4'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.elementaryStreams">elementary_streams</a></code> | <code>typing.List[str]</code> | List of ElementaryStream.key values multiplexed in this stream. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.encryptionId">encryption_id</a></code> | <code>str</code> | Identifier of the encryption configuration to use. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.fileName">file_name</a></code> | <code>str</code> | The name of the generated file. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.key">key</a></code> | <code>str</code> | A unique key for this multiplexed stream. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.segmentSettings">segment_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a></code> | segment_settings block. |

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.container"></a>

```python
container: str
```

- *Type:* str

The container format. The default is 'mp4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#container GoogleTranscoderJob#container}

---

##### `elementary_streams`<sup>Optional</sup> <a name="elementary_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.elementaryStreams"></a>

```python
elementary_streams: typing.List[str]
```

- *Type:* typing.List[str]

List of ElementaryStream.key values multiplexed in this stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#elementary_streams GoogleTranscoderJob#elementary_streams}

---

##### `encryption_id`<sup>Optional</sup> <a name="encryption_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.encryptionId"></a>

```python
encryption_id: str
```

- *Type:* str

Identifier of the encryption configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#encryption_id GoogleTranscoderJob#encryption_id}

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

The name of the generated file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#file_name GoogleTranscoderJob#file_name}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key for this multiplexed stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#key GoogleTranscoderJob#key}

---

##### `segment_settings`<sup>Optional</sup> <a name="segment_settings" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.segmentSettings"></a>

```python
segment_settings: GoogleTranscoderJobConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a>

segment_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#segment_settings GoogleTranscoderJob#segment_settings}

---

### GoogleTranscoderJobConfigMuxStreamsSegmentSettings <a name="GoogleTranscoderJobConfigMuxStreamsSegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings(
  segment_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings.property.segmentDuration">segment_duration</a></code> | <code>str</code> | Duration of the segments in seconds. The default is '6.0s'. |

---

##### `segment_duration`<sup>Optional</sup> <a name="segment_duration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings.property.segmentDuration"></a>

```python
segment_duration: str
```

- *Type:* str

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#segment_duration GoogleTranscoderJob#segment_duration}

---

### GoogleTranscoderJobConfigOutput <a name="GoogleTranscoderJobConfigOutput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOutput(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput.property.uri">uri</a></code> | <code>str</code> | URI for the output file(s). For example, gs://my-bucket/outputs/. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput.property.uri"></a>

```python
uri: str
```

- *Type:* str

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#uri GoogleTranscoderJob#uri}

---

### GoogleTranscoderJobConfigOverlays <a name="GoogleTranscoderJobConfigOverlays" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlays(
  animations: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigOverlaysAnimations]] = None,
  image: GoogleTranscoderJobConfigOverlaysImage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays.property.animations">animations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>]]</code> | animations block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays.property.image">image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a></code> | image block. |

---

##### `animations`<sup>Optional</sup> <a name="animations" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays.property.animations"></a>

```python
animations: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigOverlaysAnimations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>]]

animations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#animations GoogleTranscoderJob#animations}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays.property.image"></a>

```python
image: GoogleTranscoderJobConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#image GoogleTranscoderJob#image}

---

### GoogleTranscoderJobConfigOverlaysAnimations <a name="GoogleTranscoderJobConfigOverlaysAnimations" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations(
  animation_fade: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations.property.animationFade">animation_fade</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | animation_fade block. |

---

##### `animation_fade`<sup>Optional</sup> <a name="animation_fade" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations.property.animationFade"></a>

```python
animation_fade: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a>

animation_fade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#animation_fade GoogleTranscoderJob#animation_fade}

---

### GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade <a name="GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade(
  fade_type: str,
  end_time_offset: str = None,
  start_time_offset: str = None,
  xy: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.fadeType">fade_type</a></code> | <code>str</code> | Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | The time to end the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | The time to start the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.xy">xy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | xy block. |

---

##### `fade_type`<sup>Required</sup> <a name="fade_type" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.fadeType"></a>

```python
fade_type: str
```

- *Type:* str

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#fade_type GoogleTranscoderJob#fade_type}

---

##### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#end_time_offset GoogleTranscoderJob#end_time_offset}

---

##### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#start_time_offset GoogleTranscoderJob#start_time_offset}

---

##### `xy`<sup>Optional</sup> <a name="xy" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.xy"></a>

```python
xy: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#xy GoogleTranscoderJob#xy}

---

### GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy <a name="GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy(
  x: typing.Union[int, float] = None,
  y: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.x">x</a></code> | <code>typing.Union[int, float]</code> | Normalized x coordinate. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.y">y</a></code> | <code>typing.Union[int, float]</code> | Normalized y coordinate. |

---

##### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.x"></a>

```python
x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#x GoogleTranscoderJob#x}

---

##### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.y"></a>

```python
y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#y GoogleTranscoderJob#y}

---

### GoogleTranscoderJobConfigOverlaysImage <a name="GoogleTranscoderJobConfigOverlaysImage" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage(
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage.property.uri">uri</a></code> | <code>str</code> | URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage.property.uri"></a>

```python
uri: str
```

- *Type:* str

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#uri GoogleTranscoderJob#uri}

---

### GoogleTranscoderJobConfigPubsubDestination <a name="GoogleTranscoderJobConfigPubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination(
  topic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination.property.topic">topic</a></code> | <code>str</code> | The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}. |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination.property.topic"></a>

```python
topic: str
```

- *Type:* str

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#topic GoogleTranscoderJob#topic}

---

### GoogleTranscoderJobTimeouts <a name="GoogleTranscoderJobTimeouts" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#create GoogleTranscoderJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#delete GoogleTranscoderJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#update GoogleTranscoderJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#create GoogleTranscoderJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#delete GoogleTranscoderJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#update GoogleTranscoderJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleTranscoderJobConfigAdBreaksList <a name="GoogleTranscoderJobConfigAdBreaksList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTranscoderJobConfigAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigAdBreaks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>]]

---


### GoogleTranscoderJobConfigAdBreaksOutputReference <a name="GoogleTranscoderJobConfigAdBreaksOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTranscoderJobConfigAdBreaks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>]

---


### GoogleTranscoderJobConfigAOutputReference <a name="GoogleTranscoderJobConfigAOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putAdBreaks">put_ad_breaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEditList">put_edit_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putElementaryStreams">put_elementary_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEncryptions">put_encryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putInputs">put_inputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putManifests">put_manifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putMuxStreams">put_mux_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOverlays">put_overlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putPubsubDestination">put_pubsub_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetAdBreaks">reset_ad_breaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetEditList">reset_edit_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetElementaryStreams">reset_elementary_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetEncryptions">reset_encryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetInputs">reset_inputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetManifests">reset_manifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetMuxStreams">reset_mux_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetOutput">reset_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetOverlays">reset_overlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetPubsubDestination">reset_pubsub_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ad_breaks` <a name="put_ad_breaks" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putAdBreaks"></a>

```python
def put_ad_breaks(
  value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigAdBreaks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>]]

---

##### `put_edit_list` <a name="put_edit_list" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEditList"></a>

```python
def put_edit_list(
  value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEditListStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEditList.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>]]

---

##### `put_elementary_streams` <a name="put_elementary_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putElementaryStreams"></a>

```python
def put_elementary_streams(
  value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigElementaryStreams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putElementaryStreams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>]]

---

##### `put_encryptions` <a name="put_encryptions" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEncryptions"></a>

```python
def put_encryptions(
  value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEncryptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEncryptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>]]

---

##### `put_inputs` <a name="put_inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putInputs"></a>

```python
def put_inputs(
  value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigInputs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putInputs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>]]

---

##### `put_manifests` <a name="put_manifests" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putManifests"></a>

```python
def put_manifests(
  value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigManifests]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putManifests.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>]]

---

##### `put_mux_streams` <a name="put_mux_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putMuxStreams"></a>

```python
def put_mux_streams(
  value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigMuxStreams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putMuxStreams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>]]

---

##### `put_output` <a name="put_output" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOutput"></a>

```python
def put_output(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOutput.parameter.uri"></a>

- *Type:* str

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#uri GoogleTranscoderJob#uri}

---

##### `put_overlays` <a name="put_overlays" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOverlays"></a>

```python
def put_overlays(
  value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigOverlays]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOverlays.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>]]

---

##### `put_pubsub_destination` <a name="put_pubsub_destination" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putPubsubDestination"></a>

```python
def put_pubsub_destination(
  topic: str = None
) -> None
```

###### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putPubsubDestination.parameter.topic"></a>

- *Type:* str

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#topic GoogleTranscoderJob#topic}

---

##### `reset_ad_breaks` <a name="reset_ad_breaks" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetAdBreaks"></a>

```python
def reset_ad_breaks() -> None
```

##### `reset_edit_list` <a name="reset_edit_list" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetEditList"></a>

```python
def reset_edit_list() -> None
```

##### `reset_elementary_streams` <a name="reset_elementary_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetElementaryStreams"></a>

```python
def reset_elementary_streams() -> None
```

##### `reset_encryptions` <a name="reset_encryptions" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetEncryptions"></a>

```python
def reset_encryptions() -> None
```

##### `reset_inputs` <a name="reset_inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetInputs"></a>

```python
def reset_inputs() -> None
```

##### `reset_manifests` <a name="reset_manifests" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetManifests"></a>

```python
def reset_manifests() -> None
```

##### `reset_mux_streams` <a name="reset_mux_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetMuxStreams"></a>

```python
def reset_mux_streams() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetOutput"></a>

```python
def reset_output() -> None
```

##### `reset_overlays` <a name="reset_overlays" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetOverlays"></a>

```python
def reset_overlays() -> None
```

##### `reset_pubsub_destination` <a name="reset_pubsub_destination" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetPubsubDestination"></a>

```python
def reset_pubsub_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.adBreaks">ad_breaks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList">GoogleTranscoderJobConfigAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.editList">edit_list</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList">GoogleTranscoderJobConfigEditListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.elementaryStreams">elementary_streams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList">GoogleTranscoderJobConfigElementaryStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.encryptions">encryptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList">GoogleTranscoderJobConfigEncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.inputs">inputs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList">GoogleTranscoderJobConfigInputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.manifests">manifests</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList">GoogleTranscoderJobConfigManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.muxStreams">mux_streams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList">GoogleTranscoderJobConfigMuxStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.output">output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference">GoogleTranscoderJobConfigOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.overlays">overlays</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList">GoogleTranscoderJobConfigOverlaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.pubsubDestination">pubsub_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference">GoogleTranscoderJobConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.adBreaksInput">ad_breaks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.editListInput">edit_list_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.elementaryStreamsInput">elementary_streams_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.encryptionsInput">encryptions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.inputsInput">inputs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.manifestsInput">manifests_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.muxStreamsInput">mux_streams_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.outputInput">output_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.overlaysInput">overlays_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.pubsubDestinationInput">pubsub_destination_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_breaks`<sup>Required</sup> <a name="ad_breaks" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.adBreaks"></a>

```python
ad_breaks: GoogleTranscoderJobConfigAdBreaksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList">GoogleTranscoderJobConfigAdBreaksList</a>

---

##### `edit_list`<sup>Required</sup> <a name="edit_list" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.editList"></a>

```python
edit_list: GoogleTranscoderJobConfigEditListStructList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList">GoogleTranscoderJobConfigEditListStructList</a>

---

##### `elementary_streams`<sup>Required</sup> <a name="elementary_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.elementaryStreams"></a>

```python
elementary_streams: GoogleTranscoderJobConfigElementaryStreamsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList">GoogleTranscoderJobConfigElementaryStreamsList</a>

---

##### `encryptions`<sup>Required</sup> <a name="encryptions" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.encryptions"></a>

```python
encryptions: GoogleTranscoderJobConfigEncryptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList">GoogleTranscoderJobConfigEncryptionsList</a>

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.inputs"></a>

```python
inputs: GoogleTranscoderJobConfigInputsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList">GoogleTranscoderJobConfigInputsList</a>

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.manifests"></a>

```python
manifests: GoogleTranscoderJobConfigManifestsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList">GoogleTranscoderJobConfigManifestsList</a>

---

##### `mux_streams`<sup>Required</sup> <a name="mux_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.muxStreams"></a>

```python
mux_streams: GoogleTranscoderJobConfigMuxStreamsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList">GoogleTranscoderJobConfigMuxStreamsList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.output"></a>

```python
output: GoogleTranscoderJobConfigOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference">GoogleTranscoderJobConfigOutputOutputReference</a>

---

##### `overlays`<sup>Required</sup> <a name="overlays" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.overlays"></a>

```python
overlays: GoogleTranscoderJobConfigOverlaysList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList">GoogleTranscoderJobConfigOverlaysList</a>

---

##### `pubsub_destination`<sup>Required</sup> <a name="pubsub_destination" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.pubsubDestination"></a>

```python
pubsub_destination: GoogleTranscoderJobConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference">GoogleTranscoderJobConfigPubsubDestinationOutputReference</a>

---

##### `ad_breaks_input`<sup>Optional</sup> <a name="ad_breaks_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.adBreaksInput"></a>

```python
ad_breaks_input: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigAdBreaks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>]]

---

##### `edit_list_input`<sup>Optional</sup> <a name="edit_list_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.editListInput"></a>

```python
edit_list_input: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEditListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>]]

---

##### `elementary_streams_input`<sup>Optional</sup> <a name="elementary_streams_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.elementaryStreamsInput"></a>

```python
elementary_streams_input: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigElementaryStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>]]

---

##### `encryptions_input`<sup>Optional</sup> <a name="encryptions_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.encryptionsInput"></a>

```python
encryptions_input: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEncryptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>]]

---

##### `inputs_input`<sup>Optional</sup> <a name="inputs_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.inputsInput"></a>

```python
inputs_input: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigInputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>]]

---

##### `manifests_input`<sup>Optional</sup> <a name="manifests_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.manifestsInput"></a>

```python
manifests_input: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigManifests]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>]]

---

##### `mux_streams_input`<sup>Optional</sup> <a name="mux_streams_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.muxStreamsInput"></a>

```python
mux_streams_input: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigMuxStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>]]

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.outputInput"></a>

```python
output_input: GoogleTranscoderJobConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a>

---

##### `overlays_input`<sup>Optional</sup> <a name="overlays_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.overlaysInput"></a>

```python
overlays_input: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigOverlays]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>]]

---

##### `pubsub_destination_input`<sup>Optional</sup> <a name="pubsub_destination_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.pubsubDestinationInput"></a>

```python
pubsub_destination_input: GoogleTranscoderJobConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a>

---


### GoogleTranscoderJobConfigEditListStructList <a name="GoogleTranscoderJobConfigEditListStructList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTranscoderJobConfigEditListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEditListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>]]

---


### GoogleTranscoderJobConfigEditListStructOutputReference <a name="GoogleTranscoderJobConfigEditListStructOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetInputs">reset_inputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inputs` <a name="reset_inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetInputs"></a>

```python
def reset_inputs() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.inputsInput">inputs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.inputs">inputs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inputs_input`<sup>Optional</sup> <a name="inputs_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.inputsInput"></a>

```python
inputs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: str
```

- *Type:* str

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.inputs"></a>

```python
inputs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTranscoderJobConfigEditListStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>]

---


### GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount">reset_channel_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout">reset_channel_layout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetCodec">reset_codec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz">reset_sample_rate_hertz</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_count` <a name="reset_channel_count" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount"></a>

```python
def reset_channel_count() -> None
```

##### `reset_channel_layout` <a name="reset_channel_layout" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout"></a>

```python
def reset_channel_layout() -> None
```

##### `reset_codec` <a name="reset_codec" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetCodec"></a>

```python
def reset_codec() -> None
```

##### `reset_sample_rate_hertz` <a name="reset_sample_rate_hertz" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz"></a>

```python
def reset_sample_rate_hertz() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput">bitrate_bps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput">channel_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput">channel_layout_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codecInput">codec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput">sample_rate_hertz_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCount">channel_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout">channel_layout</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codec">codec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz">sample_rate_hertz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bitrate_bps_input`<sup>Optional</sup> <a name="bitrate_bps_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput"></a>

```python
bitrate_bps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_count_input`<sup>Optional</sup> <a name="channel_count_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput"></a>

```python
channel_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_layout_input`<sup>Optional</sup> <a name="channel_layout_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput"></a>

```python
channel_layout_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codec_input`<sup>Optional</sup> <a name="codec_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codecInput"></a>

```python
codec_input: str
```

- *Type:* str

---

##### `sample_rate_hertz_input`<sup>Optional</sup> <a name="sample_rate_hertz_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput"></a>

```python
sample_rate_hertz_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_count`<sup>Required</sup> <a name="channel_count" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCount"></a>

```python
channel_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_layout`<sup>Required</sup> <a name="channel_layout" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout"></a>

```python
channel_layout: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codec`<sup>Required</sup> <a name="codec" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codec"></a>

```python
codec: str
```

- *Type:* str

---

##### `sample_rate_hertz`<sup>Required</sup> <a name="sample_rate_hertz" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz"></a>

```python
sample_rate_hertz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a>

---


### GoogleTranscoderJobConfigElementaryStreamsList <a name="GoogleTranscoderJobConfigElementaryStreamsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTranscoderJobConfigElementaryStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigElementaryStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>]]

---


### GoogleTranscoderJobConfigElementaryStreamsOutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putAudioStream">put_audio_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putVideoStream">put_video_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetAudioStream">reset_audio_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetVideoStream">reset_video_stream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_stream` <a name="put_audio_stream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putAudioStream"></a>

```python
def put_audio_stream(
  bitrate_bps: typing.Union[int, float],
  channel_count: typing.Union[int, float] = None,
  channel_layout: typing.List[str] = None,
  codec: str = None,
  sample_rate_hertz: typing.Union[int, float] = None
) -> None
```

###### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.bitrateBps"></a>

- *Type:* typing.Union[int, float]

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#bitrate_bps GoogleTranscoderJob#bitrate_bps}

---

###### `channel_count`<sup>Optional</sup> <a name="channel_count" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.channelCount"></a>

- *Type:* typing.Union[int, float]

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#channel_count GoogleTranscoderJob#channel_count}

---

###### `channel_layout`<sup>Optional</sup> <a name="channel_layout" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.channelLayout"></a>

- *Type:* typing.List[str]

A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#channel_layout GoogleTranscoderJob#channel_layout}

---

###### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.codec"></a>

- *Type:* str

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#codec GoogleTranscoderJob#codec}

---

###### `sample_rate_hertz`<sup>Optional</sup> <a name="sample_rate_hertz" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.sampleRateHertz"></a>

- *Type:* typing.Union[int, float]

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#sample_rate_hertz GoogleTranscoderJob#sample_rate_hertz}

---

##### `put_video_stream` <a name="put_video_stream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putVideoStream"></a>

```python
def put_video_stream(
  h264: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264 = None
) -> None
```

###### `h264`<sup>Optional</sup> <a name="h264" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putVideoStream.parameter.h264"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#h264 GoogleTranscoderJob#h264}

---

##### `reset_audio_stream` <a name="reset_audio_stream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetAudioStream"></a>

```python
def reset_audio_stream() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_video_stream` <a name="reset_video_stream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetVideoStream"></a>

```python
def reset_video_stream() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.audioStream">audio_stream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference">GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.videoStream">video_stream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.audioStreamInput">audio_stream_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.videoStreamInput">video_stream_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_stream`<sup>Required</sup> <a name="audio_stream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.audioStream"></a>

```python
audio_stream: GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference">GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference</a>

---

##### `video_stream`<sup>Required</sup> <a name="video_stream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.videoStream"></a>

```python
video_stream: GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference</a>

---

##### `audio_stream_input`<sup>Optional</sup> <a name="audio_stream_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.audioStreamInput"></a>

```python
audio_stream_input: GoogleTranscoderJobConfigElementaryStreamsAudioStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `video_stream_input`<sup>Optional</sup> <a name="video_stream_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.videoStreamInput"></a>

```python
video_stream_input: GoogleTranscoderJobConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTranscoderJobConfigElementaryStreams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>]

---


### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---


### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg">put_hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr">put_sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel">reset_crf_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder">reset_entropy_coder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration">reset_gop_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels">reset_height_pixels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg">reset_hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat">reset_pixel_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset">reset_preset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode">reset_rate_control_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr">reset_sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits">reset_vbv_fullness_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits">reset_vbv_size_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels">reset_width_pixels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hlg` <a name="put_hlg" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg"></a>

```python
def put_hlg() -> None
```

##### `put_sdr` <a name="put_sdr" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr"></a>

```python
def put_sdr() -> None
```

##### `reset_crf_level` <a name="reset_crf_level" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel"></a>

```python
def reset_crf_level() -> None
```

##### `reset_entropy_coder` <a name="reset_entropy_coder" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder"></a>

```python
def reset_entropy_coder() -> None
```

##### `reset_gop_duration` <a name="reset_gop_duration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration"></a>

```python
def reset_gop_duration() -> None
```

##### `reset_height_pixels` <a name="reset_height_pixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels"></a>

```python
def reset_height_pixels() -> None
```

##### `reset_hlg` <a name="reset_hlg" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg"></a>

```python
def reset_hlg() -> None
```

##### `reset_pixel_format` <a name="reset_pixel_format" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat"></a>

```python
def reset_pixel_format() -> None
```

##### `reset_preset` <a name="reset_preset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset"></a>

```python
def reset_preset() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_rate_control_mode` <a name="reset_rate_control_mode" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode"></a>

```python
def reset_rate_control_mode() -> None
```

##### `reset_sdr` <a name="reset_sdr" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr"></a>

```python
def reset_sdr() -> None
```

##### `reset_vbv_fullness_bits` <a name="reset_vbv_fullness_bits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits"></a>

```python
def reset_vbv_fullness_bits() -> None
```

##### `reset_vbv_size_bits` <a name="reset_vbv_size_bits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits"></a>

```python
def reset_vbv_size_bits() -> None
```

##### `reset_width_pixels` <a name="reset_width_pixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels"></a>

```python
def reset_width_pixels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg">hlg</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr">sdr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput">bitrate_bps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput">crf_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput">entropy_coder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput">frame_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput">gop_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput">height_pixels_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput">hlg_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput">pixel_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput">preset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput">rate_control_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput">sdr_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput">vbv_fullness_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput">vbv_size_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput">width_pixels_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps">bitrate_bps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel">crf_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder">entropy_coder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate">frame_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration">gop_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels">height_pixels</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat">pixel_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.preset">preset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode">rate_control_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits">vbv_fullness_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits">vbv_size_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels">width_pixels</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hlg`<sup>Required</sup> <a name="hlg" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg"></a>

```python
hlg: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference</a>

---

##### `sdr`<sup>Required</sup> <a name="sdr" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr"></a>

```python
sdr: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference</a>

---

##### `bitrate_bps_input`<sup>Optional</sup> <a name="bitrate_bps_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput"></a>

```python
bitrate_bps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `crf_level_input`<sup>Optional</sup> <a name="crf_level_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput"></a>

```python
crf_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entropy_coder_input`<sup>Optional</sup> <a name="entropy_coder_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput"></a>

```python
entropy_coder_input: str
```

- *Type:* str

---

##### `frame_rate_input`<sup>Optional</sup> <a name="frame_rate_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput"></a>

```python
frame_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gop_duration_input`<sup>Optional</sup> <a name="gop_duration_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput"></a>

```python
gop_duration_input: str
```

- *Type:* str

---

##### `height_pixels_input`<sup>Optional</sup> <a name="height_pixels_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput"></a>

```python
height_pixels_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hlg_input`<sup>Optional</sup> <a name="hlg_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput"></a>

```python
hlg_input: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `pixel_format_input`<sup>Optional</sup> <a name="pixel_format_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput"></a>

```python
pixel_format_input: str
```

- *Type:* str

---

##### `preset_input`<sup>Optional</sup> <a name="preset_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput"></a>

```python
preset_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `rate_control_mode_input`<sup>Optional</sup> <a name="rate_control_mode_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput"></a>

```python
rate_control_mode_input: str
```

- *Type:* str

---

##### `sdr_input`<sup>Optional</sup> <a name="sdr_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput"></a>

```python
sdr_input: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `vbv_fullness_bits_input`<sup>Optional</sup> <a name="vbv_fullness_bits_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput"></a>

```python
vbv_fullness_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vbv_size_bits_input`<sup>Optional</sup> <a name="vbv_size_bits_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput"></a>

```python
vbv_size_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width_pixels_input`<sup>Optional</sup> <a name="width_pixels_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput"></a>

```python
width_pixels_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps"></a>

```python
bitrate_bps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `crf_level`<sup>Required</sup> <a name="crf_level" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel"></a>

```python
crf_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entropy_coder`<sup>Required</sup> <a name="entropy_coder" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder"></a>

```python
entropy_coder: str
```

- *Type:* str

---

##### `frame_rate`<sup>Required</sup> <a name="frame_rate" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate"></a>

```python
frame_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gop_duration`<sup>Required</sup> <a name="gop_duration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration"></a>

```python
gop_duration: str
```

- *Type:* str

---

##### `height_pixels`<sup>Required</sup> <a name="height_pixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels"></a>

```python
height_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pixel_format`<sup>Required</sup> <a name="pixel_format" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat"></a>

```python
pixel_format: str
```

- *Type:* str

---

##### `preset`<sup>Required</sup> <a name="preset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.preset"></a>

```python
preset: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `rate_control_mode`<sup>Required</sup> <a name="rate_control_mode" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode"></a>

```python
rate_control_mode: str
```

- *Type:* str

---

##### `vbv_fullness_bits`<sup>Required</sup> <a name="vbv_fullness_bits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits"></a>

```python
vbv_fullness_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vbv_size_bits`<sup>Required</sup> <a name="vbv_size_bits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits"></a>

```python
vbv_size_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width_pixels`<sup>Required</sup> <a name="width_pixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels"></a>

```python
width_pixels: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---


### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---


### GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264">put_h264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resetH264">reset_h264</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_h264` <a name="put_h264" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264"></a>

```python
def put_h264(
  bitrate_bps: typing.Union[int, float],
  frame_rate: typing.Union[int, float],
  crf_level: typing.Union[int, float] = None,
  entropy_coder: str = None,
  gop_duration: str = None,
  height_pixels: typing.Union[int, float] = None,
  hlg: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg = None,
  pixel_format: str = None,
  preset: str = None,
  profile: str = None,
  rate_control_mode: str = None,
  sdr: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr = None,
  vbv_fullness_bits: typing.Union[int, float] = None,
  vbv_size_bits: typing.Union[int, float] = None,
  width_pixels: typing.Union[int, float] = None
) -> None
```

###### `bitrate_bps`<sup>Required</sup> <a name="bitrate_bps" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.bitrateBps"></a>

- *Type:* typing.Union[int, float]

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#bitrate_bps GoogleTranscoderJob#bitrate_bps}

---

###### `frame_rate`<sup>Required</sup> <a name="frame_rate" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.frameRate"></a>

- *Type:* typing.Union[int, float]

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#frame_rate GoogleTranscoderJob#frame_rate}

---

###### `crf_level`<sup>Optional</sup> <a name="crf_level" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.crfLevel"></a>

- *Type:* typing.Union[int, float]

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#crf_level GoogleTranscoderJob#crf_level}

---

###### `entropy_coder`<sup>Optional</sup> <a name="entropy_coder" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.entropyCoder"></a>

- *Type:* str

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#entropy_coder GoogleTranscoderJob#entropy_coder}

---

###### `gop_duration`<sup>Optional</sup> <a name="gop_duration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.gopDuration"></a>

- *Type:* str

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#gop_duration GoogleTranscoderJob#gop_duration}

---

###### `height_pixels`<sup>Optional</sup> <a name="height_pixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.heightPixels"></a>

- *Type:* typing.Union[int, float]

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#height_pixels GoogleTranscoderJob#height_pixels}

---

###### `hlg`<sup>Optional</sup> <a name="hlg" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.hlg"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#hlg GoogleTranscoderJob#hlg}

---

###### `pixel_format`<sup>Optional</sup> <a name="pixel_format" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.pixelFormat"></a>

- *Type:* str

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#pixel_format GoogleTranscoderJob#pixel_format}

---

###### `preset`<sup>Optional</sup> <a name="preset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.preset"></a>

- *Type:* str

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#preset GoogleTranscoderJob#preset}

---

###### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.profile"></a>

- *Type:* str

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#profile GoogleTranscoderJob#profile}

---

###### `rate_control_mode`<sup>Optional</sup> <a name="rate_control_mode" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.rateControlMode"></a>

- *Type:* str

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#rate_control_mode GoogleTranscoderJob#rate_control_mode}

---

###### `sdr`<sup>Optional</sup> <a name="sdr" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.sdr"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#sdr GoogleTranscoderJob#sdr}

---

###### `vbv_fullness_bits`<sup>Optional</sup> <a name="vbv_fullness_bits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.vbvFullnessBits"></a>

- *Type:* typing.Union[int, float]

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#vbv_fullness_bits GoogleTranscoderJob#vbv_fullness_bits}

---

###### `vbv_size_bits`<sup>Optional</sup> <a name="vbv_size_bits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.vbvSizeBits"></a>

- *Type:* typing.Union[int, float]

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#vbv_size_bits GoogleTranscoderJob#vbv_size_bits}

---

###### `width_pixels`<sup>Optional</sup> <a name="width_pixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.widthPixels"></a>

- *Type:* typing.Union[int, float]

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#width_pixels GoogleTranscoderJob#width_pixels}

---

##### `reset_h264` <a name="reset_h264" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resetH264"></a>

```python
def reset_h264() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264">h264</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264Input">h264_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `h264`<sup>Required</sup> <a name="h264" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264"></a>

```python
h264: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference</a>

---

##### `h264_input`<sup>Optional</sup> <a name="h264_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264Input"></a>

```python
h264_input: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigElementaryStreamsVideoStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a>

---


### GoogleTranscoderJobConfigEncryptionsAes128OutputReference <a name="GoogleTranscoderJobConfigEncryptionsAes128OutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a>

---


### GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---


### GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---


### GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey">put_clearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay">put_fairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready">put_playready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine">put_widevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetClearkey">reset_clearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetFairplay">reset_fairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetPlayready">reset_playready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetWidevine">reset_widevine</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_clearkey` <a name="put_clearkey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey"></a>

```python
def put_clearkey() -> None
```

##### `put_fairplay` <a name="put_fairplay" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay"></a>

```python
def put_fairplay() -> None
```

##### `put_playready` <a name="put_playready" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready"></a>

```python
def put_playready() -> None
```

##### `put_widevine` <a name="put_widevine" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine"></a>

```python
def put_widevine() -> None
```

##### `reset_clearkey` <a name="reset_clearkey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetClearkey"></a>

```python
def reset_clearkey() -> None
```

##### `reset_fairplay` <a name="reset_fairplay" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetFairplay"></a>

```python
def reset_fairplay() -> None
```

##### `reset_playready` <a name="reset_playready" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetPlayready"></a>

```python
def reset_playready() -> None
```

##### `reset_widevine` <a name="reset_widevine" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetWidevine"></a>

```python
def reset_widevine() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkey">clearkey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplay">fairplay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playready">playready</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevine">widevine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput">clearkey_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput">fairplay_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput">playready_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevineInput">widevine_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clearkey`<sup>Required</sup> <a name="clearkey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkey"></a>

```python
clearkey: GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference</a>

---

##### `fairplay`<sup>Required</sup> <a name="fairplay" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplay"></a>

```python
fairplay: GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference</a>

---

##### `playready`<sup>Required</sup> <a name="playready" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playready"></a>

```python
playready: GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference</a>

---

##### `widevine`<sup>Required</sup> <a name="widevine" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevine"></a>

```python
widevine: GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference</a>

---

##### `clearkey_input`<sup>Optional</sup> <a name="clearkey_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput"></a>

```python
clearkey_input: GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---

##### `fairplay_input`<sup>Optional</sup> <a name="fairplay_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput"></a>

```python
fairplay_input: GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---

##### `playready_input`<sup>Optional</sup> <a name="playready_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput"></a>

```python
playready_input: GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---

##### `widevine_input`<sup>Optional</sup> <a name="widevine_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevineInput"></a>

```python
widevine_input: GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a>

---


### GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---


### GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---


### GoogleTranscoderJobConfigEncryptionsList <a name="GoogleTranscoderJobConfigEncryptionsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTranscoderJobConfigEncryptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigEncryptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>]]

---


### GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference <a name="GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a>

---


### GoogleTranscoderJobConfigEncryptionsOutputReference <a name="GoogleTranscoderJobConfigEncryptionsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putAes128">put_aes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putDrmSystems">put_drm_systems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putMpegCenc">put_mpeg_cenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putSampleAes">put_sample_aes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource">put_secret_manager_key_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetAes128">reset_aes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetDrmSystems">reset_drm_systems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetMpegCenc">reset_mpeg_cenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetSampleAes">reset_sample_aes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetSecretManagerKeySource">reset_secret_manager_key_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aes128` <a name="put_aes128" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putAes128"></a>

```python
def put_aes128() -> None
```

##### `put_drm_systems` <a name="put_drm_systems" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putDrmSystems"></a>

```python
def put_drm_systems(
  clearkey: GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey = None,
  fairplay: GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay = None,
  playready: GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready = None,
  widevine: GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine = None
) -> None
```

###### `clearkey`<sup>Optional</sup> <a name="clearkey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putDrmSystems.parameter.clearkey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#clearkey GoogleTranscoderJob#clearkey}

---

###### `fairplay`<sup>Optional</sup> <a name="fairplay" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putDrmSystems.parameter.fairplay"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#fairplay GoogleTranscoderJob#fairplay}

---

###### `playready`<sup>Optional</sup> <a name="playready" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putDrmSystems.parameter.playready"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#playready GoogleTranscoderJob#playready}

---

###### `widevine`<sup>Optional</sup> <a name="widevine" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putDrmSystems.parameter.widevine"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#widevine GoogleTranscoderJob#widevine}

---

##### `put_mpeg_cenc` <a name="put_mpeg_cenc" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putMpegCenc"></a>

```python
def put_mpeg_cenc(
  scheme: str
) -> None
```

###### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putMpegCenc.parameter.scheme"></a>

- *Type:* str

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#scheme GoogleTranscoderJob#scheme}

---

##### `put_sample_aes` <a name="put_sample_aes" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putSampleAes"></a>

```python
def put_sample_aes() -> None
```

##### `put_secret_manager_key_source` <a name="put_secret_manager_key_source" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource"></a>

```python
def put_secret_manager_key_source(
  secret_version: str
) -> None
```

###### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource.parameter.secretVersion"></a>

- *Type:* str

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#secret_version GoogleTranscoderJob#secret_version}

---

##### `reset_aes128` <a name="reset_aes128" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetAes128"></a>

```python
def reset_aes128() -> None
```

##### `reset_drm_systems` <a name="reset_drm_systems" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetDrmSystems"></a>

```python
def reset_drm_systems() -> None
```

##### `reset_mpeg_cenc` <a name="reset_mpeg_cenc" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetMpegCenc"></a>

```python
def reset_mpeg_cenc() -> None
```

##### `reset_sample_aes` <a name="reset_sample_aes" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetSampleAes"></a>

```python
def reset_sample_aes() -> None
```

##### `reset_secret_manager_key_source` <a name="reset_secret_manager_key_source" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetSecretManagerKeySource"></a>

```python
def reset_secret_manager_key_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.aes128">aes128</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference">GoogleTranscoderJobConfigEncryptionsAes128OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.drmSystems">drm_systems</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.mpegCenc">mpeg_cenc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference">GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.sampleAes">sample_aes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference">GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySource">secret_manager_key_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.aes128Input">aes128_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.drmSystemsInput">drm_systems_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.mpegCencInput">mpeg_cenc_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.sampleAesInput">sample_aes_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySourceInput">secret_manager_key_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aes128`<sup>Required</sup> <a name="aes128" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.aes128"></a>

```python
aes128: GoogleTranscoderJobConfigEncryptionsAes128OutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference">GoogleTranscoderJobConfigEncryptionsAes128OutputReference</a>

---

##### `drm_systems`<sup>Required</sup> <a name="drm_systems" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.drmSystems"></a>

```python
drm_systems: GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference</a>

---

##### `mpeg_cenc`<sup>Required</sup> <a name="mpeg_cenc" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.mpegCenc"></a>

```python
mpeg_cenc: GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference">GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference</a>

---

##### `sample_aes`<sup>Required</sup> <a name="sample_aes" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.sampleAes"></a>

```python
sample_aes: GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference">GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference</a>

---

##### `secret_manager_key_source`<sup>Required</sup> <a name="secret_manager_key_source" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySource"></a>

```python
secret_manager_key_source: GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference</a>

---

##### `aes128_input`<sup>Optional</sup> <a name="aes128_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.aes128Input"></a>

```python
aes128_input: GoogleTranscoderJobConfigEncryptionsAes128
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a>

---

##### `drm_systems_input`<sup>Optional</sup> <a name="drm_systems_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.drmSystemsInput"></a>

```python
drm_systems_input: GoogleTranscoderJobConfigEncryptionsDrmSystems
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mpeg_cenc_input`<sup>Optional</sup> <a name="mpeg_cenc_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.mpegCencInput"></a>

```python
mpeg_cenc_input: GoogleTranscoderJobConfigEncryptionsMpegCenc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a>

---

##### `sample_aes_input`<sup>Optional</sup> <a name="sample_aes_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.sampleAesInput"></a>

```python
sample_aes_input: GoogleTranscoderJobConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a>

---

##### `secret_manager_key_source_input`<sup>Optional</sup> <a name="secret_manager_key_source_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySourceInput"></a>

```python
secret_manager_key_source_input: GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTranscoderJobConfigEncryptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>]

---


### GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference <a name="GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigEncryptionsSampleAes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a>

---


### GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference <a name="GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---


### GoogleTranscoderJobConfigInputsList <a name="GoogleTranscoderJobConfigInputsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigInputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTranscoderJobConfigInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigInputs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>]]

---


### GoogleTranscoderJobConfigInputsOutputReference <a name="GoogleTranscoderJobConfigInputsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTranscoderJobConfigInputs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>]

---


### GoogleTranscoderJobConfigManifestsList <a name="GoogleTranscoderJobConfigManifestsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTranscoderJobConfigManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigManifests]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>]]

---


### GoogleTranscoderJobConfigManifestsOutputReference <a name="GoogleTranscoderJobConfigManifestsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetFileName">reset_file_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetMuxStreams">reset_mux_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_name` <a name="reset_file_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetFileName"></a>

```python
def reset_file_name() -> None
```

##### `reset_mux_streams` <a name="reset_mux_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetMuxStreams"></a>

```python
def reset_mux_streams() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.muxStreamsInput">mux_streams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.muxStreams">mux_streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `mux_streams_input`<sup>Optional</sup> <a name="mux_streams_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.muxStreamsInput"></a>

```python
mux_streams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `mux_streams`<sup>Required</sup> <a name="mux_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.muxStreams"></a>

```python
mux_streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTranscoderJobConfigManifests]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>]

---


### GoogleTranscoderJobConfigMuxStreamsList <a name="GoogleTranscoderJobConfigMuxStreamsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTranscoderJobConfigMuxStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigMuxStreams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>]]

---


### GoogleTranscoderJobConfigMuxStreamsOutputReference <a name="GoogleTranscoderJobConfigMuxStreamsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings">put_segment_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetElementaryStreams">reset_elementary_streams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetEncryptionId">reset_encryption_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetFileName">reset_file_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetSegmentSettings">reset_segment_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_segment_settings` <a name="put_segment_settings" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings"></a>

```python
def put_segment_settings(
  segment_duration: str = None
) -> None
```

###### `segment_duration`<sup>Optional</sup> <a name="segment_duration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings.parameter.segmentDuration"></a>

- *Type:* str

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#segment_duration GoogleTranscoderJob#segment_duration}

---

##### `reset_container` <a name="reset_container" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_elementary_streams` <a name="reset_elementary_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetElementaryStreams"></a>

```python
def reset_elementary_streams() -> None
```

##### `reset_encryption_id` <a name="reset_encryption_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetEncryptionId"></a>

```python
def reset_encryption_id() -> None
```

##### `reset_file_name` <a name="reset_file_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetFileName"></a>

```python
def reset_file_name() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_segment_settings` <a name="reset_segment_settings" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetSegmentSettings"></a>

```python
def reset_segment_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.segmentSettings">segment_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference">GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreamsInput">elementary_streams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.encryptionIdInput">encryption_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.segmentSettingsInput">segment_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreams">elementary_streams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.encryptionId">encryption_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segment_settings`<sup>Required</sup> <a name="segment_settings" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.segmentSettings"></a>

```python
segment_settings: GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference">GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference</a>

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `elementary_streams_input`<sup>Optional</sup> <a name="elementary_streams_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreamsInput"></a>

```python
elementary_streams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption_id_input`<sup>Optional</sup> <a name="encryption_id_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.encryptionIdInput"></a>

```python
encryption_id_input: str
```

- *Type:* str

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `segment_settings_input`<sup>Optional</sup> <a name="segment_settings_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.segmentSettingsInput"></a>

```python
segment_settings_input: GoogleTranscoderJobConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `elementary_streams`<sup>Required</sup> <a name="elementary_streams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreams"></a>

```python
elementary_streams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption_id`<sup>Required</sup> <a name="encryption_id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.encryptionId"></a>

```python
encryption_id: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTranscoderJobConfigMuxStreams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>]

---


### GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference <a name="GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration">reset_segment_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_segment_duration` <a name="reset_segment_duration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration"></a>

```python
def reset_segment_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput">segment_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration">segment_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segment_duration_input`<sup>Optional</sup> <a name="segment_duration_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput"></a>

```python
segment_duration_input: str
```

- *Type:* str

---

##### `segment_duration`<sup>Required</sup> <a name="segment_duration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration"></a>

```python
segment_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigMuxStreamsSegmentSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a>

---


### GoogleTranscoderJobConfigOutputOutputReference <a name="GoogleTranscoderJobConfigOutputOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a>

---


### GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference <a name="GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy">put_xy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset">reset_end_time_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset">reset_start_time_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy">reset_xy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_xy` <a name="put_xy" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy"></a>

```python
def put_xy(
  x: typing.Union[int, float] = None,
  y: typing.Union[int, float] = None
) -> None
```

###### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.x"></a>

- *Type:* typing.Union[int, float]

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#x GoogleTranscoderJob#x}

---

###### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.y"></a>

- *Type:* typing.Union[int, float]

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#y GoogleTranscoderJob#y}

---

##### `reset_end_time_offset` <a name="reset_end_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset"></a>

```python
def reset_end_time_offset() -> None
```

##### `reset_start_time_offset` <a name="reset_start_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset"></a>

```python
def reset_start_time_offset() -> None
```

##### `reset_xy` <a name="reset_xy" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy"></a>

```python
def reset_xy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy">xy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput">end_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput">fade_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput">start_time_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput">xy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType">fade_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `xy`<sup>Required</sup> <a name="xy" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy"></a>

```python
xy: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference</a>

---

##### `end_time_offset_input`<sup>Optional</sup> <a name="end_time_offset_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput"></a>

```python
end_time_offset_input: str
```

- *Type:* str

---

##### `fade_type_input`<sup>Optional</sup> <a name="fade_type_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput"></a>

```python
fade_type_input: str
```

- *Type:* str

---

##### `start_time_offset_input`<sup>Optional</sup> <a name="start_time_offset_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput"></a>

```python
start_time_offset_input: str
```

- *Type:* str

---

##### `xy_input`<sup>Optional</sup> <a name="xy_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput"></a>

```python
xy_input: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `end_time_offset`<sup>Required</sup> <a name="end_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

---

##### `fade_type`<sup>Required</sup> <a name="fade_type" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType"></a>

```python
fade_type: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---


### GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference <a name="GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX">reset_x</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY">reset_y</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x` <a name="reset_x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX"></a>

```python
def reset_x() -> None
```

##### `reset_y` <a name="reset_y" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY"></a>

```python
def reset_y() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput">x_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput">y_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x">x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y">y</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_input`<sup>Optional</sup> <a name="x_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput"></a>

```python
x_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `y_input`<sup>Optional</sup> <a name="y_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput"></a>

```python
y_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x"></a>

```python
x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y"></a>

```python
y: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---


### GoogleTranscoderJobConfigOverlaysAnimationsList <a name="GoogleTranscoderJobConfigOverlaysAnimationsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTranscoderJobConfigOverlaysAnimationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigOverlaysAnimations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>]]

---


### GoogleTranscoderJobConfigOverlaysAnimationsOutputReference <a name="GoogleTranscoderJobConfigOverlaysAnimationsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade">put_animation_fade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.resetAnimationFade">reset_animation_fade</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_animation_fade` <a name="put_animation_fade" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade"></a>

```python
def put_animation_fade(
  fade_type: str,
  end_time_offset: str = None,
  start_time_offset: str = None,
  xy: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy = None
) -> None
```

###### `fade_type`<sup>Required</sup> <a name="fade_type" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.fadeType"></a>

- *Type:* str

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#fade_type GoogleTranscoderJob#fade_type}

---

###### `end_time_offset`<sup>Optional</sup> <a name="end_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.endTimeOffset"></a>

- *Type:* str

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#end_time_offset GoogleTranscoderJob#end_time_offset}

---

###### `start_time_offset`<sup>Optional</sup> <a name="start_time_offset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.startTimeOffset"></a>

- *Type:* str

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#start_time_offset GoogleTranscoderJob#start_time_offset}

---

###### `xy`<sup>Optional</sup> <a name="xy" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.xy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#xy GoogleTranscoderJob#xy}

---

##### `reset_animation_fade` <a name="reset_animation_fade" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.resetAnimationFade"></a>

```python
def reset_animation_fade() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFade">animation_fade</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFadeInput">animation_fade_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `animation_fade`<sup>Required</sup> <a name="animation_fade" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFade"></a>

```python
animation_fade: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference</a>

---

##### `animation_fade_input`<sup>Optional</sup> <a name="animation_fade_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFadeInput"></a>

```python
animation_fade_input: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTranscoderJobConfigOverlaysAnimations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>]

---


### GoogleTranscoderJobConfigOverlaysImageOutputReference <a name="GoogleTranscoderJobConfigOverlaysImageOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a>

---


### GoogleTranscoderJobConfigOverlaysList <a name="GoogleTranscoderJobConfigOverlaysList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTranscoderJobConfigOverlaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigOverlays]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>]]

---


### GoogleTranscoderJobConfigOverlaysOutputReference <a name="GoogleTranscoderJobConfigOverlaysOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putAnimations">put_animations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putImage">put_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resetAnimations">reset_animations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resetImage">reset_image</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_animations` <a name="put_animations" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putAnimations"></a>

```python
def put_animations(
  value: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigOverlaysAnimations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putAnimations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>]]

---

##### `put_image` <a name="put_image" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putImage"></a>

```python
def put_image(
  uri: str
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putImage.parameter.uri"></a>

- *Type:* str

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_transcoder_job#uri GoogleTranscoderJob#uri}

---

##### `reset_animations` <a name="reset_animations" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resetAnimations"></a>

```python
def reset_animations() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resetImage"></a>

```python
def reset_image() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.animations">animations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList">GoogleTranscoderJobConfigOverlaysAnimationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.image">image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference">GoogleTranscoderJobConfigOverlaysImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.animationsInput">animations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.imageInput">image_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `animations`<sup>Required</sup> <a name="animations" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.animations"></a>

```python
animations: GoogleTranscoderJobConfigOverlaysAnimationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList">GoogleTranscoderJobConfigOverlaysAnimationsList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.image"></a>

```python
image: GoogleTranscoderJobConfigOverlaysImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference">GoogleTranscoderJobConfigOverlaysImageOutputReference</a>

---

##### `animations_input`<sup>Optional</sup> <a name="animations_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.animationsInput"></a>

```python
animations_input: typing.Union[IResolvable, typing.List[GoogleTranscoderJobConfigOverlaysAnimations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.imageInput"></a>

```python
image_input: GoogleTranscoderJobConfigOverlaysImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTranscoderJobConfigOverlays]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>]

---


### GoogleTranscoderJobConfigPubsubDestinationOutputReference <a name="GoogleTranscoderJobConfigPubsubDestinationOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.resetTopic">reset_topic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic` <a name="reset_topic" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.resetTopic"></a>

```python
def reset_topic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTranscoderJobConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a>

---


### GoogleTranscoderJobTimeoutsOutputReference <a name="GoogleTranscoderJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_transcoder_job

googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTranscoderJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a>]

---



