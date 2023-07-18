# `google_ml_engine_model`

Refer to the Terraform Registory for docs: [`google_ml_engine_model`](https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model).

# `googleMlEngineModel` Submodule <a name="`googleMlEngineModel` Submodule" id="@cdktf/provider-google-beta.googleMlEngineModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMlEngineModel <a name="GoogleMlEngineModel" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model google_ml_engine_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_ml_engine_model

googleMlEngineModel.GoogleMlEngineModel(
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
  default_version: GoogleMlEngineModelDefaultVersion = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  online_prediction_console_logging: typing.Union[bool, IResolvable] = None,
  online_prediction_logging: typing.Union[bool, IResolvable] = None,
  project: str = None,
  regions: typing.List[str] = None,
  timeouts: GoogleMlEngineModelTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.name">name</a></code> | <code>str</code> | The name specified for the model. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.defaultVersion">default_version</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion">GoogleMlEngineModelDefaultVersion</a></code> | default_version block. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.description">description</a></code> | <code>str</code> | The description specified for the model when it was created. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#id GoogleMlEngineModel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | One or more labels that you can add, to organize your models. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.onlinePredictionConsoleLogging">online_prediction_console_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.onlinePredictionLogging">online_prediction_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, online prediction access logs are sent to StackDriver Logging. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#project GoogleMlEngineModel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.regions">regions</a></code> | <code>typing.List[str]</code> | The list of regions where the model is going to be deployed. Currently only one region per model is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts">GoogleMlEngineModelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.name"></a>

- *Type:* str

The name specified for the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#name GoogleMlEngineModel#name}

---

##### `default_version`<sup>Optional</sup> <a name="default_version" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.defaultVersion"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion">GoogleMlEngineModelDefaultVersion</a>

default_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#default_version GoogleMlEngineModel#default_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.description"></a>

- *Type:* str

The description specified for the model when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#description GoogleMlEngineModel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#id GoogleMlEngineModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

One or more labels that you can add, to organize your models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#labels GoogleMlEngineModel#labels}

---

##### `online_prediction_console_logging`<sup>Optional</sup> <a name="online_prediction_console_logging" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.onlinePredictionConsoleLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#online_prediction_console_logging GoogleMlEngineModel#online_prediction_console_logging}

---

##### `online_prediction_logging`<sup>Optional</sup> <a name="online_prediction_logging" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.onlinePredictionLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, online prediction access logs are sent to StackDriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#online_prediction_logging GoogleMlEngineModel#online_prediction_logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#project GoogleMlEngineModel#project}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.regions"></a>

- *Type:* typing.List[str]

The list of regions where the model is going to be deployed. Currently only one region per model is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#regions GoogleMlEngineModel#regions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts">GoogleMlEngineModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#timeouts GoogleMlEngineModel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.putDefaultVersion">put_default_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetDefaultVersion">reset_default_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetOnlinePredictionConsoleLogging">reset_online_prediction_console_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetOnlinePredictionLogging">reset_online_prediction_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_default_version` <a name="put_default_version" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.putDefaultVersion"></a>

```python
def put_default_version(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.putDefaultVersion.parameter.name"></a>

- *Type:* str

The name specified for the version when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#name GoogleMlEngineModel#name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#create GoogleMlEngineModel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#delete GoogleMlEngineModel#delete}.

---

##### `reset_default_version` <a name="reset_default_version" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetDefaultVersion"></a>

```python
def reset_default_version() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_online_prediction_console_logging` <a name="reset_online_prediction_console_logging" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetOnlinePredictionConsoleLogging"></a>

```python
def reset_online_prediction_console_logging() -> None
```

##### `reset_online_prediction_logging` <a name="reset_online_prediction_logging" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetOnlinePredictionLogging"></a>

```python
def reset_online_prediction_logging() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_ml_engine_model

googleMlEngineModel.GoogleMlEngineModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_ml_engine_model

googleMlEngineModel.GoogleMlEngineModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_ml_engine_model

googleMlEngineModel.GoogleMlEngineModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.defaultVersion">default_version</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference">GoogleMlEngineModelDefaultVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference">GoogleMlEngineModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.defaultVersionInput">default_version_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion">GoogleMlEngineModelDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.onlinePredictionConsoleLoggingInput">online_prediction_console_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.onlinePredictionLoggingInput">online_prediction_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts">GoogleMlEngineModelTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.onlinePredictionConsoleLogging">online_prediction_console_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.onlinePredictionLogging">online_prediction_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_version`<sup>Required</sup> <a name="default_version" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.defaultVersion"></a>

```python
default_version: GoogleMlEngineModelDefaultVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference">GoogleMlEngineModelDefaultVersionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.timeouts"></a>

```python
timeouts: GoogleMlEngineModelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference">GoogleMlEngineModelTimeoutsOutputReference</a>

---

##### `default_version_input`<sup>Optional</sup> <a name="default_version_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.defaultVersionInput"></a>

```python
default_version_input: GoogleMlEngineModelDefaultVersion
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion">GoogleMlEngineModelDefaultVersion</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `online_prediction_console_logging_input`<sup>Optional</sup> <a name="online_prediction_console_logging_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.onlinePredictionConsoleLoggingInput"></a>

```python
online_prediction_console_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `online_prediction_logging_input`<sup>Optional</sup> <a name="online_prediction_logging_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.onlinePredictionLoggingInput"></a>

```python
online_prediction_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleMlEngineModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts">GoogleMlEngineModelTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `online_prediction_console_logging`<sup>Required</sup> <a name="online_prediction_console_logging" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.onlinePredictionConsoleLogging"></a>

```python
online_prediction_console_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `online_prediction_logging`<sup>Required</sup> <a name="online_prediction_logging" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.onlinePredictionLogging"></a>

```python
online_prediction_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMlEngineModelConfig <a name="GoogleMlEngineModelConfig" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_ml_engine_model

googleMlEngineModel.GoogleMlEngineModelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  default_version: GoogleMlEngineModelDefaultVersion = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  online_prediction_console_logging: typing.Union[bool, IResolvable] = None,
  online_prediction_logging: typing.Union[bool, IResolvable] = None,
  project: str = None,
  regions: typing.List[str] = None,
  timeouts: GoogleMlEngineModelTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.name">name</a></code> | <code>str</code> | The name specified for the model. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.defaultVersion">default_version</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion">GoogleMlEngineModelDefaultVersion</a></code> | default_version block. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.description">description</a></code> | <code>str</code> | The description specified for the model when it was created. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#id GoogleMlEngineModel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | One or more labels that you can add, to organize your models. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.onlinePredictionConsoleLogging">online_prediction_console_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.onlinePredictionLogging">online_prediction_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, online prediction access logs are sent to StackDriver Logging. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#project GoogleMlEngineModel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | The list of regions where the model is going to be deployed. Currently only one region per model is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts">GoogleMlEngineModelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name specified for the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#name GoogleMlEngineModel#name}

---

##### `default_version`<sup>Optional</sup> <a name="default_version" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.defaultVersion"></a>

```python
default_version: GoogleMlEngineModelDefaultVersion
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion">GoogleMlEngineModelDefaultVersion</a>

default_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#default_version GoogleMlEngineModel#default_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description specified for the model when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#description GoogleMlEngineModel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#id GoogleMlEngineModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

One or more labels that you can add, to organize your models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#labels GoogleMlEngineModel#labels}

---

##### `online_prediction_console_logging`<sup>Optional</sup> <a name="online_prediction_console_logging" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.onlinePredictionConsoleLogging"></a>

```python
online_prediction_console_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#online_prediction_console_logging GoogleMlEngineModel#online_prediction_console_logging}

---

##### `online_prediction_logging`<sup>Optional</sup> <a name="online_prediction_logging" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.onlinePredictionLogging"></a>

```python
online_prediction_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, online prediction access logs are sent to StackDriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#online_prediction_logging GoogleMlEngineModel#online_prediction_logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#project GoogleMlEngineModel#project}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

The list of regions where the model is going to be deployed. Currently only one region per model is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#regions GoogleMlEngineModel#regions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelConfig.property.timeouts"></a>

```python
timeouts: GoogleMlEngineModelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts">GoogleMlEngineModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#timeouts GoogleMlEngineModel#timeouts}

---

### GoogleMlEngineModelDefaultVersion <a name="GoogleMlEngineModelDefaultVersion" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_ml_engine_model

googleMlEngineModel.GoogleMlEngineModelDefaultVersion(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion.property.name">name</a></code> | <code>str</code> | The name specified for the version when it was created. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion.property.name"></a>

```python
name: str
```

- *Type:* str

The name specified for the version when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#name GoogleMlEngineModel#name}

---

### GoogleMlEngineModelTimeouts <a name="GoogleMlEngineModelTimeouts" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_ml_engine_model

googleMlEngineModel.GoogleMlEngineModelTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#create GoogleMlEngineModel#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#delete GoogleMlEngineModel#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#create GoogleMlEngineModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_ml_engine_model#delete GoogleMlEngineModel#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMlEngineModelDefaultVersionOutputReference <a name="GoogleMlEngineModelDefaultVersionOutputReference" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_ml_engine_model

googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion">GoogleMlEngineModelDefaultVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMlEngineModelDefaultVersion
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelDefaultVersion">GoogleMlEngineModelDefaultVersion</a>

---


### GoogleMlEngineModelTimeoutsOutputReference <a name="GoogleMlEngineModelTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_ml_engine_model

googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts">GoogleMlEngineModelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMlEngineModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMlEngineModel.GoogleMlEngineModelTimeouts">GoogleMlEngineModelTimeouts</a>]

---



