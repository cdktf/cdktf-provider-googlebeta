# `googleModelArmorTemplate` Submodule <a name="`googleModelArmorTemplate` Submodule" id="@cdktf/provider-google-beta.googleModelArmorTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleModelArmorTemplate <a name="GoogleModelArmorTemplate" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template google_model_armor_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_config: GoogleModelArmorTemplateFilterConfig,
  location: str,
  template_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  template_metadata: GoogleModelArmorTemplateTemplateMetadata = None,
  timeouts: GoogleModelArmorTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.templateId">template_id</a></code> | <code>str</code> | Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#id GoogleModelArmorTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#project GoogleModelArmorTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.templateMetadata">template_metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a></code> | template_metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.filterConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#filter_config GoogleModelArmorTemplate#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#location GoogleModelArmorTemplate#location}

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.templateId"></a>

- *Type:* str

Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#template_id GoogleModelArmorTemplate#template_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#id GoogleModelArmorTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#labels GoogleModelArmorTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#project GoogleModelArmorTemplate#project}.

---

##### `template_metadata`<sup>Optional</sup> <a name="template_metadata" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.templateMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a>

template_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#template_metadata GoogleModelArmorTemplate#template_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#timeouts GoogleModelArmorTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putFilterConfig">put_filter_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata">put_template_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetTemplateMetadata">reset_template_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter_config` <a name="put_filter_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putFilterConfig"></a>

```python
def put_filter_config(
  malicious_uri_filter_settings: GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings = None,
  pi_and_jailbreak_filter_settings: GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings = None,
  rai_settings: GoogleModelArmorTemplateFilterConfigRaiSettings = None,
  sdp_settings: GoogleModelArmorTemplateFilterConfigSdpSettings = None
) -> None
```

###### `malicious_uri_filter_settings`<sup>Optional</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putFilterConfig.parameter.maliciousUriFilterSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#malicious_uri_filter_settings GoogleModelArmorTemplate#malicious_uri_filter_settings}

---

###### `pi_and_jailbreak_filter_settings`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putFilterConfig.parameter.piAndJailbreakFilterSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#pi_and_jailbreak_filter_settings GoogleModelArmorTemplate#pi_and_jailbreak_filter_settings}

---

###### `rai_settings`<sup>Optional</sup> <a name="rai_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putFilterConfig.parameter.raiSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#rai_settings GoogleModelArmorTemplate#rai_settings}

---

###### `sdp_settings`<sup>Optional</sup> <a name="sdp_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putFilterConfig.parameter.sdpSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#sdp_settings GoogleModelArmorTemplate#sdp_settings}

---

##### `put_template_metadata` <a name="put_template_metadata" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata"></a>

```python
def put_template_metadata(
  custom_llm_response_safety_error_code: typing.Union[int, float] = None,
  custom_llm_response_safety_error_message: str = None,
  custom_prompt_safety_error_code: typing.Union[int, float] = None,
  custom_prompt_safety_error_message: str = None,
  enforcement_type: str = None,
  ignore_partial_invocation_failures: typing.Union[bool, IResolvable] = None,
  log_sanitize_operations: typing.Union[bool, IResolvable] = None,
  log_template_operations: typing.Union[bool, IResolvable] = None,
  multi_language_detection: GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection = None
) -> None
```

###### `custom_llm_response_safety_error_code`<sup>Optional</sup> <a name="custom_llm_response_safety_error_code" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata.parameter.customLlmResponseSafetyErrorCode"></a>

- *Type:* typing.Union[int, float]

Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#custom_llm_response_safety_error_code GoogleModelArmorTemplate#custom_llm_response_safety_error_code}

---

###### `custom_llm_response_safety_error_message`<sup>Optional</sup> <a name="custom_llm_response_safety_error_message" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata.parameter.customLlmResponseSafetyErrorMessage"></a>

- *Type:* str

Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#custom_llm_response_safety_error_message GoogleModelArmorTemplate#custom_llm_response_safety_error_message}

---

###### `custom_prompt_safety_error_code`<sup>Optional</sup> <a name="custom_prompt_safety_error_code" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata.parameter.customPromptSafetyErrorCode"></a>

- *Type:* typing.Union[int, float]

Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#custom_prompt_safety_error_code GoogleModelArmorTemplate#custom_prompt_safety_error_code}

---

###### `custom_prompt_safety_error_message`<sup>Optional</sup> <a name="custom_prompt_safety_error_message" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata.parameter.customPromptSafetyErrorMessage"></a>

- *Type:* str

Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#custom_prompt_safety_error_message GoogleModelArmorTemplate#custom_prompt_safety_error_message}

---

###### `enforcement_type`<sup>Optional</sup> <a name="enforcement_type" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata.parameter.enforcementType"></a>

- *Type:* str

Possible values: INSPECT_ONLY INSPECT_AND_BLOCK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#enforcement_type GoogleModelArmorTemplate#enforcement_type}

---

###### `ignore_partial_invocation_failures`<sup>Optional</sup> <a name="ignore_partial_invocation_failures" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata.parameter.ignorePartialInvocationFailures"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, partial detector failures should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#ignore_partial_invocation_failures GoogleModelArmorTemplate#ignore_partial_invocation_failures}

---

###### `log_sanitize_operations`<sup>Optional</sup> <a name="log_sanitize_operations" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata.parameter.logSanitizeOperations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log sanitize operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#log_sanitize_operations GoogleModelArmorTemplate#log_sanitize_operations}

---

###### `log_template_operations`<sup>Optional</sup> <a name="log_template_operations" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata.parameter.logTemplateOperations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log template crud operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#log_template_operations GoogleModelArmorTemplate#log_template_operations}

---

###### `multi_language_detection`<sup>Optional</sup> <a name="multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTemplateMetadata.parameter.multiLanguageDetection"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#multi_language_detection GoogleModelArmorTemplate#multi_language_detection}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#create GoogleModelArmorTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#delete GoogleModelArmorTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#update GoogleModelArmorTemplate#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_template_metadata` <a name="reset_template_metadata" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetTemplateMetadata"></a>

```python
def reset_template_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleModelArmorTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleModelArmorTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleModelArmorTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleModelArmorTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleModelArmorTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference">GoogleModelArmorTemplateFilterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateMetadata">template_metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference">GoogleModelArmorTemplateTemplateMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference">GoogleModelArmorTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.filterConfigInput">filter_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateIdInput">template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateMetadataInput">template_metadata_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateId">template_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.filterConfig"></a>

```python
filter_config: GoogleModelArmorTemplateFilterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference">GoogleModelArmorTemplateFilterConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `template_metadata`<sup>Required</sup> <a name="template_metadata" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateMetadata"></a>

```python
template_metadata: GoogleModelArmorTemplateTemplateMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference">GoogleModelArmorTemplateTemplateMetadataOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.timeouts"></a>

```python
timeouts: GoogleModelArmorTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference">GoogleModelArmorTemplateTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `filter_config_input`<sup>Optional</sup> <a name="filter_config_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.filterConfigInput"></a>

```python
filter_config_input: GoogleModelArmorTemplateFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `template_id_input`<sup>Optional</sup> <a name="template_id_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateIdInput"></a>

```python
template_id_input: str
```

- *Type:* str

---

##### `template_metadata_input`<sup>Optional</sup> <a name="template_metadata_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateMetadataInput"></a>

```python
template_metadata_input: GoogleModelArmorTemplateTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleModelArmorTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleModelArmorTemplateConfig <a name="GoogleModelArmorTemplateConfig" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_config: GoogleModelArmorTemplateFilterConfig,
  location: str,
  template_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  template_metadata: GoogleModelArmorTemplateTemplateMetadata = None,
  timeouts: GoogleModelArmorTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.templateId">template_id</a></code> | <code>str</code> | Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#id GoogleModelArmorTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#project GoogleModelArmorTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.templateMetadata">template_metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a></code> | template_metadata block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.filterConfig"></a>

```python
filter_config: GoogleModelArmorTemplateFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#filter_config GoogleModelArmorTemplate#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#location GoogleModelArmorTemplate#location}

---

##### `template_id`<sup>Required</sup> <a name="template_id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.templateId"></a>

```python
template_id: str
```

- *Type:* str

Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#template_id GoogleModelArmorTemplate#template_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#id GoogleModelArmorTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#labels GoogleModelArmorTemplate#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#project GoogleModelArmorTemplate#project}.

---

##### `template_metadata`<sup>Optional</sup> <a name="template_metadata" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.templateMetadata"></a>

```python
template_metadata: GoogleModelArmorTemplateTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a>

template_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#template_metadata GoogleModelArmorTemplate#template_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateConfig.property.timeouts"></a>

```python
timeouts: GoogleModelArmorTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#timeouts GoogleModelArmorTemplate#timeouts}

---

### GoogleModelArmorTemplateFilterConfig <a name="GoogleModelArmorTemplateFilterConfig" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig(
  malicious_uri_filter_settings: GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings = None,
  pi_and_jailbreak_filter_settings: GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings = None,
  rai_settings: GoogleModelArmorTemplateFilterConfigRaiSettings = None,
  sdp_settings: GoogleModelArmorTemplateFilterConfigSdpSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.maliciousUriFilterSettings">malicious_uri_filter_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | malicious_uri_filter_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.piAndJailbreakFilterSettings">pi_and_jailbreak_filter_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | pi_and_jailbreak_filter_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.raiSettings">rai_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a></code> | rai_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.sdpSettings">sdp_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a></code> | sdp_settings block. |

---

##### `malicious_uri_filter_settings`<sup>Optional</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.maliciousUriFilterSettings"></a>

```python
malicious_uri_filter_settings: GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#malicious_uri_filter_settings GoogleModelArmorTemplate#malicious_uri_filter_settings}

---

##### `pi_and_jailbreak_filter_settings`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.piAndJailbreakFilterSettings"></a>

```python
pi_and_jailbreak_filter_settings: GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#pi_and_jailbreak_filter_settings GoogleModelArmorTemplate#pi_and_jailbreak_filter_settings}

---

##### `rai_settings`<sup>Optional</sup> <a name="rai_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.raiSettings"></a>

```python
rai_settings: GoogleModelArmorTemplateFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#rai_settings GoogleModelArmorTemplate#rai_settings}

---

##### `sdp_settings`<sup>Optional</sup> <a name="sdp_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig.property.sdpSettings"></a>

```python
sdp_settings: GoogleModelArmorTemplateFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#sdp_settings GoogleModelArmorTemplate#sdp_settings}

---

### GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings <a name="GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings(
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}

---

### GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings <a name="GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings(
  confidence_level: str = None,
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#confidence_level GoogleModelArmorTemplate#confidence_level}

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}

---

### GoogleModelArmorTemplateFilterConfigRaiSettings <a name="GoogleModelArmorTemplateFilterConfigRaiSettings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings(
  rai_filters: typing.Union[IResolvable, typing.List[GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings.property.raiFilters">rai_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]</code> | rai_filters block. |

---

##### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings.property.raiFilters"></a>

```python
rai_filters: typing.Union[IResolvable, typing.List[GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#rai_filters GoogleModelArmorTemplate#rai_filters}

---

### GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters <a name="GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters(
  filter_type: str,
  confidence_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.filterType">filter_type</a></code> | <code>str</code> | Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#filter_type GoogleModelArmorTemplate#filter_type}

---

##### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#confidence_level GoogleModelArmorTemplate#confidence_level}

---

### GoogleModelArmorTemplateFilterConfigSdpSettings <a name="GoogleModelArmorTemplateFilterConfigSdpSettings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings(
  advanced_config: GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig = None,
  basic_config: GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings.property.advancedConfig">advanced_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | advanced_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings.property.basicConfig">basic_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | basic_config block. |

---

##### `advanced_config`<sup>Optional</sup> <a name="advanced_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings.property.advancedConfig"></a>

```python
advanced_config: GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#advanced_config GoogleModelArmorTemplate#advanced_config}

---

##### `basic_config`<sup>Optional</sup> <a name="basic_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings.property.basicConfig"></a>

```python
basic_config: GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#basic_config GoogleModelArmorTemplate#basic_config}

---

### GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig <a name="GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig(
  deidentify_template: str = None,
  inspect_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | Optional Sensitive Data Protection Deidentify template resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization. |

---

##### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.
e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#deidentify_template GoogleModelArmorTemplate#deidentify_template}

---

##### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization.

All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.
e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#inspect_template GoogleModelArmorTemplate#inspect_template}

---

### GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig <a name="GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig(
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}

---

### GoogleModelArmorTemplateTemplateMetadata <a name="GoogleModelArmorTemplateTemplateMetadata" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata(
  custom_llm_response_safety_error_code: typing.Union[int, float] = None,
  custom_llm_response_safety_error_message: str = None,
  custom_prompt_safety_error_code: typing.Union[int, float] = None,
  custom_prompt_safety_error_message: str = None,
  enforcement_type: str = None,
  ignore_partial_invocation_failures: typing.Union[bool, IResolvable] = None,
  log_sanitize_operations: typing.Union[bool, IResolvable] = None,
  log_template_operations: typing.Union[bool, IResolvable] = None,
  multi_language_detection: GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorCode">custom_llm_response_safety_error_code</a></code> | <code>typing.Union[int, float]</code> | Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorMessage">custom_llm_response_safety_error_message</a></code> | <code>str</code> | Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorCode">custom_prompt_safety_error_code</a></code> | <code>typing.Union[int, float]</code> | Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorMessage">custom_prompt_safety_error_message</a></code> | <code>str</code> | Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.enforcementType">enforcement_type</a></code> | <code>str</code> | Possible values: INSPECT_ONLY INSPECT_AND_BLOCK. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.ignorePartialInvocationFailures">ignore_partial_invocation_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, partial detector failures should be ignored. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.logSanitizeOperations">log_sanitize_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, log sanitize operations. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.logTemplateOperations">log_template_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, log template crud operations. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.multiLanguageDetection">multi_language_detection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | multi_language_detection block. |

---

##### `custom_llm_response_safety_error_code`<sup>Optional</sup> <a name="custom_llm_response_safety_error_code" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorCode"></a>

```python
custom_llm_response_safety_error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#custom_llm_response_safety_error_code GoogleModelArmorTemplate#custom_llm_response_safety_error_code}

---

##### `custom_llm_response_safety_error_message`<sup>Optional</sup> <a name="custom_llm_response_safety_error_message" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorMessage"></a>

```python
custom_llm_response_safety_error_message: str
```

- *Type:* str

Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#custom_llm_response_safety_error_message GoogleModelArmorTemplate#custom_llm_response_safety_error_message}

---

##### `custom_prompt_safety_error_code`<sup>Optional</sup> <a name="custom_prompt_safety_error_code" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorCode"></a>

```python
custom_prompt_safety_error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#custom_prompt_safety_error_code GoogleModelArmorTemplate#custom_prompt_safety_error_code}

---

##### `custom_prompt_safety_error_message`<sup>Optional</sup> <a name="custom_prompt_safety_error_message" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorMessage"></a>

```python
custom_prompt_safety_error_message: str
```

- *Type:* str

Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#custom_prompt_safety_error_message GoogleModelArmorTemplate#custom_prompt_safety_error_message}

---

##### `enforcement_type`<sup>Optional</sup> <a name="enforcement_type" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.enforcementType"></a>

```python
enforcement_type: str
```

- *Type:* str

Possible values: INSPECT_ONLY INSPECT_AND_BLOCK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#enforcement_type GoogleModelArmorTemplate#enforcement_type}

---

##### `ignore_partial_invocation_failures`<sup>Optional</sup> <a name="ignore_partial_invocation_failures" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.ignorePartialInvocationFailures"></a>

```python
ignore_partial_invocation_failures: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, partial detector failures should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#ignore_partial_invocation_failures GoogleModelArmorTemplate#ignore_partial_invocation_failures}

---

##### `log_sanitize_operations`<sup>Optional</sup> <a name="log_sanitize_operations" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.logSanitizeOperations"></a>

```python
log_sanitize_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log sanitize operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#log_sanitize_operations GoogleModelArmorTemplate#log_sanitize_operations}

---

##### `log_template_operations`<sup>Optional</sup> <a name="log_template_operations" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.logTemplateOperations"></a>

```python
log_template_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log template crud operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#log_template_operations GoogleModelArmorTemplate#log_template_operations}

---

##### `multi_language_detection`<sup>Optional</sup> <a name="multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata.property.multiLanguageDetection"></a>

```python
multi_language_detection: GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#multi_language_detection GoogleModelArmorTemplate#multi_language_detection}

---

### GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection <a name="GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection(
  enable_multi_language_detection: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection.property.enableMultiLanguageDetection">enable_multi_language_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, multi language detection will be enabled. |

---

##### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection.property.enableMultiLanguageDetection"></a>

```python
enable_multi_language_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#enable_multi_language_detection GoogleModelArmorTemplate#enable_multi_language_detection}

---

### GoogleModelArmorTemplateTimeouts <a name="GoogleModelArmorTemplateTimeouts" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#create GoogleModelArmorTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#delete GoogleModelArmorTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#update GoogleModelArmorTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#create GoogleModelArmorTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#delete GoogleModelArmorTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#update GoogleModelArmorTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference <a name="GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---


### GoogleModelArmorTemplateFilterConfigOutputReference <a name="GoogleModelArmorTemplateFilterConfigOutputReference" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings">put_malicious_uri_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings">put_pi_and_jailbreak_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putRaiSettings">put_rai_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putSdpSettings">put_sdp_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetMaliciousUriFilterSettings">reset_malicious_uri_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetPiAndJailbreakFilterSettings">reset_pi_and_jailbreak_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetRaiSettings">reset_rai_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetSdpSettings">reset_sdp_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_malicious_uri_filter_settings` <a name="put_malicious_uri_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings"></a>

```python
def put_malicious_uri_filter_settings(
  filter_enforcement: str = None
) -> None
```

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}

---

##### `put_pi_and_jailbreak_filter_settings` <a name="put_pi_and_jailbreak_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings"></a>

```python
def put_pi_and_jailbreak_filter_settings(
  confidence_level: str = None,
  filter_enforcement: str = None
) -> None
```

###### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.confidenceLevel"></a>

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#confidence_level GoogleModelArmorTemplate#confidence_level}

---

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}

---

##### `put_rai_settings` <a name="put_rai_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putRaiSettings"></a>

```python
def put_rai_settings(
  rai_filters: typing.Union[IResolvable, typing.List[GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
) -> None
```

###### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putRaiSettings.parameter.raiFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#rai_filters GoogleModelArmorTemplate#rai_filters}

---

##### `put_sdp_settings` <a name="put_sdp_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putSdpSettings"></a>

```python
def put_sdp_settings(
  advanced_config: GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig = None,
  basic_config: GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig = None
) -> None
```

###### `advanced_config`<sup>Optional</sup> <a name="advanced_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putSdpSettings.parameter.advancedConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#advanced_config GoogleModelArmorTemplate#advanced_config}

---

###### `basic_config`<sup>Optional</sup> <a name="basic_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.putSdpSettings.parameter.basicConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#basic_config GoogleModelArmorTemplate#basic_config}

---

##### `reset_malicious_uri_filter_settings` <a name="reset_malicious_uri_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetMaliciousUriFilterSettings"></a>

```python
def reset_malicious_uri_filter_settings() -> None
```

##### `reset_pi_and_jailbreak_filter_settings` <a name="reset_pi_and_jailbreak_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetPiAndJailbreakFilterSettings"></a>

```python
def reset_pi_and_jailbreak_filter_settings() -> None
```

##### `reset_rai_settings` <a name="reset_rai_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetRaiSettings"></a>

```python
def reset_rai_settings() -> None
```

##### `reset_sdp_settings` <a name="reset_sdp_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.resetSdpSettings"></a>

```python
def reset_sdp_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettings">malicious_uri_filter_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettings">pi_and_jailbreak_filter_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.raiSettings">rai_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference">GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.sdpSettings">sdp_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettingsInput">malicious_uri_filter_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput">pi_and_jailbreak_filter_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.raiSettingsInput">rai_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.sdpSettingsInput">sdp_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `malicious_uri_filter_settings`<sup>Required</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettings"></a>

```python
malicious_uri_filter_settings: GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference</a>

---

##### `pi_and_jailbreak_filter_settings`<sup>Required</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettings"></a>

```python
pi_and_jailbreak_filter_settings: GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference</a>

---

##### `rai_settings`<sup>Required</sup> <a name="rai_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.raiSettings"></a>

```python
rai_settings: GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference">GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference</a>

---

##### `sdp_settings`<sup>Required</sup> <a name="sdp_settings" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.sdpSettings"></a>

```python
sdp_settings: GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference</a>

---

##### `malicious_uri_filter_settings_input`<sup>Optional</sup> <a name="malicious_uri_filter_settings_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettingsInput"></a>

```python
malicious_uri_filter_settings_input: GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings">GoogleModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---

##### `pi_and_jailbreak_filter_settings_input`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput"></a>

```python
pi_and_jailbreak_filter_settings_input: GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `rai_settings_input`<sup>Optional</sup> <a name="rai_settings_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.raiSettingsInput"></a>

```python
rai_settings_input: GoogleModelArmorTemplateFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a>

---

##### `sdp_settings_input`<sup>Optional</sup> <a name="sdp_settings_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.sdpSettingsInput"></a>

```python
sdp_settings_input: GoogleModelArmorTemplateFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorTemplateFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfig">GoogleModelArmorTemplateFilterConfig</a>

---


### GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference <a name="GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel">reset_confidence_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidence_level` <a name="reset_confidence_level" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel"></a>

```python
def reset_confidence_level() -> None
```

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput">confidence_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_level_input`<sup>Optional</sup> <a name="confidence_level_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput"></a>

```python
confidence_level_input: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---


### GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference <a name="GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters">put_rai_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rai_filters` <a name="put_rai_filters" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters"></a>

```python
def put_rai_filters(
  value: typing.Union[IResolvable, typing.List[GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFilters">rai_filters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFiltersInput">rai_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFilters"></a>

```python
rai_filters: GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList</a>

---

##### `rai_filters_input`<sup>Optional</sup> <a name="rai_filters_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFiltersInput"></a>

```python
rai_filters_input: typing.Union[IResolvable, typing.List[GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorTemplateFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettings">GoogleModelArmorTemplateFilterConfigRaiSettings</a>

---


### GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList <a name="GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]]

---


### GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference <a name="GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel">reset_confidence_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidence_level` <a name="reset_confidence_level" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel"></a>

```python
def reset_confidence_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput">confidence_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_level_input`<sup>Optional</sup> <a name="confidence_level_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput"></a>

```python
confidence_level_input: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters">GoogleModelArmorTemplateFilterConfigRaiSettingsRaiFilters</a>]

---


### GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference <a name="GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate">reset_deidentify_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate">reset_inspect_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deidentify_template` <a name="reset_deidentify_template" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate"></a>

```python
def reset_deidentify_template() -> None
```

##### `reset_inspect_template` <a name="reset_inspect_template" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate"></a>

```python
def reset_inspect_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput">deidentify_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput">inspect_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deidentify_template_input`<sup>Optional</sup> <a name="deidentify_template_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput"></a>

```python
deidentify_template_input: str
```

- *Type:* str

---

##### `inspect_template_input`<sup>Optional</sup> <a name="inspect_template_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput"></a>

```python
inspect_template_input: str
```

- *Type:* str

---

##### `deidentify_template`<sup>Required</sup> <a name="deidentify_template" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

---

##### `inspect_template`<sup>Required</sup> <a name="inspect_template" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---


### GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference <a name="GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---


### GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference <a name="GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig">put_advanced_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig">put_basic_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetAdvancedConfig">reset_advanced_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetBasicConfig">reset_basic_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_config` <a name="put_advanced_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig"></a>

```python
def put_advanced_config(
  deidentify_template: str = None,
  inspect_template: str = None
) -> None
```

###### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.deidentifyTemplate"></a>

- *Type:* str

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.
e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#deidentify_template GoogleModelArmorTemplate#deidentify_template}

---

###### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.inspectTemplate"></a>

- *Type:* str

Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization.

All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.
e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#inspect_template GoogleModelArmorTemplate#inspect_template}

---

##### `put_basic_config` <a name="put_basic_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig"></a>

```python
def put_basic_config(
  filter_enforcement: str = None
) -> None
```

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#filter_enforcement GoogleModelArmorTemplate#filter_enforcement}

---

##### `reset_advanced_config` <a name="reset_advanced_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetAdvancedConfig"></a>

```python
def reset_advanced_config() -> None
```

##### `reset_basic_config` <a name="reset_basic_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetBasicConfig"></a>

```python
def reset_basic_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfig">advanced_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfig">basic_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfigInput">advanced_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfigInput">basic_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_config`<sup>Required</sup> <a name="advanced_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfig"></a>

```python
advanced_config: GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference</a>

---

##### `basic_config`<sup>Required</sup> <a name="basic_config" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfig"></a>

```python
basic_config: GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference</a>

---

##### `advanced_config_input`<sup>Optional</sup> <a name="advanced_config_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfigInput"></a>

```python
advanced_config_input: GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `basic_config_input`<sup>Optional</sup> <a name="basic_config_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfigInput"></a>

```python
basic_config_input: GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig">GoogleModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorTemplateFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateFilterConfigSdpSettings">GoogleModelArmorTemplateFilterConfigSdpSettings</a>

---


### GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference <a name="GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput">enable_multi_language_detection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection">enable_multi_language_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_multi_language_detection_input`<sup>Optional</sup> <a name="enable_multi_language_detection_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput"></a>

```python
enable_multi_language_detection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection"></a>

```python
enable_multi_language_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---


### GoogleModelArmorTemplateTemplateMetadataOutputReference <a name="GoogleModelArmorTemplateTemplateMetadataOutputReference" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection">put_multi_language_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorCode">reset_custom_llm_response_safety_error_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorMessage">reset_custom_llm_response_safety_error_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorCode">reset_custom_prompt_safety_error_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorMessage">reset_custom_prompt_safety_error_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetEnforcementType">reset_enforcement_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetIgnorePartialInvocationFailures">reset_ignore_partial_invocation_failures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetLogSanitizeOperations">reset_log_sanitize_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetLogTemplateOperations">reset_log_template_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetMultiLanguageDetection">reset_multi_language_detection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_multi_language_detection` <a name="put_multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection"></a>

```python
def put_multi_language_detection(
  enable_multi_language_detection: typing.Union[bool, IResolvable]
) -> None
```

###### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection.parameter.enableMultiLanguageDetection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_model_armor_template#enable_multi_language_detection GoogleModelArmorTemplate#enable_multi_language_detection}

---

##### `reset_custom_llm_response_safety_error_code` <a name="reset_custom_llm_response_safety_error_code" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorCode"></a>

```python
def reset_custom_llm_response_safety_error_code() -> None
```

##### `reset_custom_llm_response_safety_error_message` <a name="reset_custom_llm_response_safety_error_message" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorMessage"></a>

```python
def reset_custom_llm_response_safety_error_message() -> None
```

##### `reset_custom_prompt_safety_error_code` <a name="reset_custom_prompt_safety_error_code" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorCode"></a>

```python
def reset_custom_prompt_safety_error_code() -> None
```

##### `reset_custom_prompt_safety_error_message` <a name="reset_custom_prompt_safety_error_message" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorMessage"></a>

```python
def reset_custom_prompt_safety_error_message() -> None
```

##### `reset_enforcement_type` <a name="reset_enforcement_type" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetEnforcementType"></a>

```python
def reset_enforcement_type() -> None
```

##### `reset_ignore_partial_invocation_failures` <a name="reset_ignore_partial_invocation_failures" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetIgnorePartialInvocationFailures"></a>

```python
def reset_ignore_partial_invocation_failures() -> None
```

##### `reset_log_sanitize_operations` <a name="reset_log_sanitize_operations" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetLogSanitizeOperations"></a>

```python
def reset_log_sanitize_operations() -> None
```

##### `reset_log_template_operations` <a name="reset_log_template_operations" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetLogTemplateOperations"></a>

```python
def reset_log_template_operations() -> None
```

##### `reset_multi_language_detection` <a name="reset_multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.resetMultiLanguageDetection"></a>

```python
def reset_multi_language_detection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetection">multi_language_detection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCodeInput">custom_llm_response_safety_error_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessageInput">custom_llm_response_safety_error_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCodeInput">custom_prompt_safety_error_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessageInput">custom_prompt_safety_error_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.enforcementTypeInput">enforcement_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailuresInput">ignore_partial_invocation_failures_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperationsInput">log_sanitize_operations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperationsInput">log_template_operations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetectionInput">multi_language_detection_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCode">custom_llm_response_safety_error_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessage">custom_llm_response_safety_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCode">custom_prompt_safety_error_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessage">custom_prompt_safety_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.enforcementType">enforcement_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailures">ignore_partial_invocation_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperations">log_sanitize_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperations">log_template_operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multi_language_detection`<sup>Required</sup> <a name="multi_language_detection" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetection"></a>

```python
multi_language_detection: GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference</a>

---

##### `custom_llm_response_safety_error_code_input`<sup>Optional</sup> <a name="custom_llm_response_safety_error_code_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCodeInput"></a>

```python
custom_llm_response_safety_error_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_llm_response_safety_error_message_input`<sup>Optional</sup> <a name="custom_llm_response_safety_error_message_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessageInput"></a>

```python
custom_llm_response_safety_error_message_input: str
```

- *Type:* str

---

##### `custom_prompt_safety_error_code_input`<sup>Optional</sup> <a name="custom_prompt_safety_error_code_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCodeInput"></a>

```python
custom_prompt_safety_error_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_prompt_safety_error_message_input`<sup>Optional</sup> <a name="custom_prompt_safety_error_message_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessageInput"></a>

```python
custom_prompt_safety_error_message_input: str
```

- *Type:* str

---

##### `enforcement_type_input`<sup>Optional</sup> <a name="enforcement_type_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.enforcementTypeInput"></a>

```python
enforcement_type_input: str
```

- *Type:* str

---

##### `ignore_partial_invocation_failures_input`<sup>Optional</sup> <a name="ignore_partial_invocation_failures_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailuresInput"></a>

```python
ignore_partial_invocation_failures_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_sanitize_operations_input`<sup>Optional</sup> <a name="log_sanitize_operations_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperationsInput"></a>

```python
log_sanitize_operations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_template_operations_input`<sup>Optional</sup> <a name="log_template_operations_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperationsInput"></a>

```python
log_template_operations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `multi_language_detection_input`<sup>Optional</sup> <a name="multi_language_detection_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetectionInput"></a>

```python
multi_language_detection_input: GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection">GoogleModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---

##### `custom_llm_response_safety_error_code`<sup>Required</sup> <a name="custom_llm_response_safety_error_code" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCode"></a>

```python
custom_llm_response_safety_error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_llm_response_safety_error_message`<sup>Required</sup> <a name="custom_llm_response_safety_error_message" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessage"></a>

```python
custom_llm_response_safety_error_message: str
```

- *Type:* str

---

##### `custom_prompt_safety_error_code`<sup>Required</sup> <a name="custom_prompt_safety_error_code" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCode"></a>

```python
custom_prompt_safety_error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_prompt_safety_error_message`<sup>Required</sup> <a name="custom_prompt_safety_error_message" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessage"></a>

```python
custom_prompt_safety_error_message: str
```

- *Type:* str

---

##### `enforcement_type`<sup>Required</sup> <a name="enforcement_type" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.enforcementType"></a>

```python
enforcement_type: str
```

- *Type:* str

---

##### `ignore_partial_invocation_failures`<sup>Required</sup> <a name="ignore_partial_invocation_failures" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailures"></a>

```python
ignore_partial_invocation_failures: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_sanitize_operations`<sup>Required</sup> <a name="log_sanitize_operations" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperations"></a>

```python
log_sanitize_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_template_operations`<sup>Required</sup> <a name="log_template_operations" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperations"></a>

```python
log_template_operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleModelArmorTemplateTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTemplateMetadata">GoogleModelArmorTemplateTemplateMetadata</a>

---


### GoogleModelArmorTemplateTimeoutsOutputReference <a name="GoogleModelArmorTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_model_armor_template

googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleModelArmorTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleModelArmorTemplate.GoogleModelArmorTemplateTimeouts">GoogleModelArmorTemplateTimeouts</a>]

---



