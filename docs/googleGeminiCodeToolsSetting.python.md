# `googleGeminiCodeToolsSetting` Submodule <a name="`googleGeminiCodeToolsSetting` Submodule" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiCodeToolsSetting <a name="GoogleGeminiCodeToolsSetting" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting google_gemini_code_tools_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  code_tools_setting_id: str,
  enabled_tool: typing.Union[IResolvable, typing.List[GoogleGeminiCodeToolsSettingEnabledTool]],
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GoogleGeminiCodeToolsSettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.codeToolsSettingId">code_tools_setting_id</a></code> | <code>str</code> | Id of the Code Tools Setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.enabledTool">enabled_tool</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>]]</code> | enabled_tool block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#id GoogleGeminiCodeToolsSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#project GoogleGeminiCodeToolsSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `code_tools_setting_id`<sup>Required</sup> <a name="code_tools_setting_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.codeToolsSettingId"></a>

- *Type:* str

Id of the Code Tools Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#code_tools_setting_id GoogleGeminiCodeToolsSetting#code_tools_setting_id}

---

##### `enabled_tool`<sup>Required</sup> <a name="enabled_tool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.enabledTool"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>]]

enabled_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#enabled_tool GoogleGeminiCodeToolsSetting#enabled_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#id GoogleGeminiCodeToolsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#labels GoogleGeminiCodeToolsSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#location GoogleGeminiCodeToolsSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#project GoogleGeminiCodeToolsSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#timeouts GoogleGeminiCodeToolsSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putEnabledTool">put_enabled_tool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_enabled_tool` <a name="put_enabled_tool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putEnabledTool"></a>

```python
def put_enabled_tool(
  value: typing.Union[IResolvable, typing.List[GoogleGeminiCodeToolsSettingEnabledTool]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putEnabledTool.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#create GoogleGeminiCodeToolsSetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#delete GoogleGeminiCodeToolsSetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#update GoogleGeminiCodeToolsSetting#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleGeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleGeminiCodeToolsSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleGeminiCodeToolsSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleGeminiCodeToolsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiCodeToolsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledTool">enabled_tool</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList">GoogleGeminiCodeToolsSettingEnabledToolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference">GoogleGeminiCodeToolsSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingIdInput">code_tools_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledToolInput">enabled_tool_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingId">code_tools_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `enabled_tool`<sup>Required</sup> <a name="enabled_tool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledTool"></a>

```python
enabled_tool: GoogleGeminiCodeToolsSettingEnabledToolList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList">GoogleGeminiCodeToolsSettingEnabledToolList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeouts"></a>

```python
timeouts: GoogleGeminiCodeToolsSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference">GoogleGeminiCodeToolsSettingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `code_tools_setting_id_input`<sup>Optional</sup> <a name="code_tools_setting_id_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingIdInput"></a>

```python
code_tools_setting_id_input: str
```

- *Type:* str

---

##### `enabled_tool_input`<sup>Optional</sup> <a name="enabled_tool_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.enabledToolInput"></a>

```python
enabled_tool_input: typing.Union[IResolvable, typing.List[GoogleGeminiCodeToolsSettingEnabledTool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleGeminiCodeToolsSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>]

---

##### `code_tools_setting_id`<sup>Required</sup> <a name="code_tools_setting_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.codeToolsSettingId"></a>

```python
code_tools_setting_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiCodeToolsSettingConfig <a name="GoogleGeminiCodeToolsSettingConfig" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  code_tools_setting_id: str,
  enabled_tool: typing.Union[IResolvable, typing.List[GoogleGeminiCodeToolsSettingEnabledTool]],
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GoogleGeminiCodeToolsSettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.codeToolsSettingId">code_tools_setting_id</a></code> | <code>str</code> | Id of the Code Tools Setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.enabledTool">enabled_tool</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>]]</code> | enabled_tool block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#id GoogleGeminiCodeToolsSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#project GoogleGeminiCodeToolsSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `code_tools_setting_id`<sup>Required</sup> <a name="code_tools_setting_id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.codeToolsSettingId"></a>

```python
code_tools_setting_id: str
```

- *Type:* str

Id of the Code Tools Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#code_tools_setting_id GoogleGeminiCodeToolsSetting#code_tools_setting_id}

---

##### `enabled_tool`<sup>Required</sup> <a name="enabled_tool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.enabledTool"></a>

```python
enabled_tool: typing.Union[IResolvable, typing.List[GoogleGeminiCodeToolsSettingEnabledTool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>]]

enabled_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#enabled_tool GoogleGeminiCodeToolsSetting#enabled_tool}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#id GoogleGeminiCodeToolsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#labels GoogleGeminiCodeToolsSetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#location GoogleGeminiCodeToolsSetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#project GoogleGeminiCodeToolsSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingConfig.property.timeouts"></a>

```python
timeouts: GoogleGeminiCodeToolsSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#timeouts GoogleGeminiCodeToolsSetting#timeouts}

---

### GoogleGeminiCodeToolsSettingEnabledTool <a name="GoogleGeminiCodeToolsSettingEnabledTool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool(
  handle: str,
  tool: str,
  account_connector: str = None,
  config: typing.Union[IResolvable, typing.List[GoogleGeminiCodeToolsSettingEnabledToolConfig]] = None,
  uri_override: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.handle">handle</a></code> | <code>str</code> | Handle used to invoke the tool. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.tool">tool</a></code> | <code>str</code> | Link to the Tool. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.accountConnector">account_connector</a></code> | <code>str</code> | Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.config">config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>]]</code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.uriOverride">uri_override</a></code> | <code>str</code> | Overridden URI, if allowed by Tool. |

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.handle"></a>

```python
handle: str
```

- *Type:* str

Handle used to invoke the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#handle GoogleGeminiCodeToolsSetting#handle}

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.tool"></a>

```python
tool: str
```

- *Type:* str

Link to the Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#tool GoogleGeminiCodeToolsSetting#tool}

---

##### `account_connector`<sup>Optional</sup> <a name="account_connector" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.accountConnector"></a>

```python
account_connector: str
```

- *Type:* str

Link to the Dev Connect Account Connector that holds the user credentials. projects/{project}/locations/{location}/accountConnectors/{account_connector_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#account_connector GoogleGeminiCodeToolsSetting#account_connector}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.config"></a>

```python
config: typing.Union[IResolvable, typing.List[GoogleGeminiCodeToolsSettingEnabledToolConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>]]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#config GoogleGeminiCodeToolsSetting#config}

---

##### `uri_override`<sup>Optional</sup> <a name="uri_override" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool.property.uriOverride"></a>

```python
uri_override: str
```

- *Type:* str

Overridden URI, if allowed by Tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#uri_override GoogleGeminiCodeToolsSetting#uri_override}

---

### GoogleGeminiCodeToolsSettingEnabledToolConfig <a name="GoogleGeminiCodeToolsSettingEnabledToolConfig" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.key">key</a></code> | <code>str</code> | Key of the configuration item. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.value">value</a></code> | <code>str</code> | Value of the configuration item. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Key of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#key GoogleGeminiCodeToolsSetting#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#value GoogleGeminiCodeToolsSetting#value}

---

### GoogleGeminiCodeToolsSettingTimeouts <a name="GoogleGeminiCodeToolsSettingTimeouts" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#create GoogleGeminiCodeToolsSetting#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#delete GoogleGeminiCodeToolsSetting#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#update GoogleGeminiCodeToolsSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#create GoogleGeminiCodeToolsSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#delete GoogleGeminiCodeToolsSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_gemini_code_tools_setting#update GoogleGeminiCodeToolsSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiCodeToolsSettingEnabledToolConfigList <a name="GoogleGeminiCodeToolsSettingEnabledToolConfigList" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGeminiCodeToolsSettingEnabledToolConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>]]

---


### GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference <a name="GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGeminiCodeToolsSettingEnabledToolConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>]

---


### GoogleGeminiCodeToolsSettingEnabledToolList <a name="GoogleGeminiCodeToolsSettingEnabledToolList" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGeminiCodeToolsSettingEnabledToolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGeminiCodeToolsSettingEnabledTool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>]]

---


### GoogleGeminiCodeToolsSettingEnabledToolOutputReference <a name="GoogleGeminiCodeToolsSettingEnabledToolOutputReference" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector">reset_account_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride">reset_uri_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.putConfig"></a>

```python
def put_config(
  value: typing.Union[IResolvable, typing.List[GoogleGeminiCodeToolsSettingEnabledToolConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.putConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>]]

---

##### `reset_account_connector` <a name="reset_account_connector" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetAccountConnector"></a>

```python
def reset_account_connector() -> None
```

##### `reset_config` <a name="reset_config" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_uri_override` <a name="reset_uri_override" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.resetUriOverride"></a>

```python
def reset_uri_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList">GoogleGeminiCodeToolsSettingEnabledToolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput">account_connector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.configInput">config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput">handle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput">tool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput">uri_override_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector">account_connector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handle">handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.tool">tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride">uri_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.config"></a>

```python
config: GoogleGeminiCodeToolsSettingEnabledToolConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfigList">GoogleGeminiCodeToolsSettingEnabledToolConfigList</a>

---

##### `account_connector_input`<sup>Optional</sup> <a name="account_connector_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnectorInput"></a>

```python
account_connector_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.configInput"></a>

```python
config_input: typing.Union[IResolvable, typing.List[GoogleGeminiCodeToolsSettingEnabledToolConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolConfig">GoogleGeminiCodeToolsSettingEnabledToolConfig</a>]]

---

##### `handle_input`<sup>Optional</sup> <a name="handle_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handleInput"></a>

```python
handle_input: str
```

- *Type:* str

---

##### `tool_input`<sup>Optional</sup> <a name="tool_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.toolInput"></a>

```python
tool_input: str
```

- *Type:* str

---

##### `uri_override_input`<sup>Optional</sup> <a name="uri_override_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverrideInput"></a>

```python
uri_override_input: str
```

- *Type:* str

---

##### `account_connector`<sup>Required</sup> <a name="account_connector" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.accountConnector"></a>

```python
account_connector: str
```

- *Type:* str

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.handle"></a>

```python
handle: str
```

- *Type:* str

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.tool"></a>

```python
tool: str
```

- *Type:* str

---

##### `uri_override`<sup>Required</sup> <a name="uri_override" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.uriOverride"></a>

```python
uri_override: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledToolOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGeminiCodeToolsSettingEnabledTool]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingEnabledTool">GoogleGeminiCodeToolsSettingEnabledTool</a>]

---


### GoogleGeminiCodeToolsSettingTimeoutsOutputReference <a name="GoogleGeminiCodeToolsSettingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gemini_code_tools_setting

googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGeminiCodeToolsSettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGeminiCodeToolsSetting.GoogleGeminiCodeToolsSettingTimeouts">GoogleGeminiCodeToolsSettingTimeouts</a>]

---



