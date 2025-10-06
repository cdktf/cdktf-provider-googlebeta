# `googleContactCenterInsightsView` Submodule <a name="`googleContactCenterInsightsView` Submodule" id="@cdktf/provider-google-beta.googleContactCenterInsightsView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsView <a name="GoogleContactCenterInsightsView" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view google_contact_center_insights_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_view

googleContactCenterInsightsView.GoogleContactCenterInsightsView(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleContactCenterInsightsViewTimeouts = None,
  value: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable display name of the view. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#id GoogleContactCenterInsightsView#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#project GoogleContactCenterInsightsView#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.value">value</a></code> | <code>str</code> | A filter to reduce conversation results to a specific subset. Refer to https://cloud.google.com/contact-center/insights/docs/filtering for details. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.location"></a>

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#location GoogleContactCenterInsightsView#location}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable display name of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#display_name GoogleContactCenterInsightsView#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#id GoogleContactCenterInsightsView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#project GoogleContactCenterInsightsView#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#timeouts GoogleContactCenterInsightsView#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.Initializer.parameter.value"></a>

- *Type:* str

A filter to reduce conversation results to a specific subset. Refer to https://cloud.google.com/contact-center/insights/docs/filtering for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#value GoogleContactCenterInsightsView#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetValue">reset_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#create GoogleContactCenterInsightsView#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#delete GoogleContactCenterInsightsView#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#update GoogleContactCenterInsightsView#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.resetValue"></a>

```python
def reset_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleContactCenterInsightsView resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_view

googleContactCenterInsightsView.GoogleContactCenterInsightsView.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_view

googleContactCenterInsightsView.GoogleContactCenterInsightsView.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_view

googleContactCenterInsightsView.GoogleContactCenterInsightsView.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_view

googleContactCenterInsightsView.GoogleContactCenterInsightsView.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleContactCenterInsightsView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleContactCenterInsightsView to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleContactCenterInsightsView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference">GoogleContactCenterInsightsViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.timeouts"></a>

```python
timeouts: GoogleContactCenterInsightsViewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference">GoogleContactCenterInsightsViewTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleContactCenterInsightsViewTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsView.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsViewConfig <a name="GoogleContactCenterInsightsViewConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_view

googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleContactCenterInsightsViewTimeouts = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable display name of the view. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#id GoogleContactCenterInsightsView#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#project GoogleContactCenterInsightsView#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.value">value</a></code> | <code>str</code> | A filter to reduce conversation results to a specific subset. Refer to https://cloud.google.com/contact-center/insights/docs/filtering for details. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#location GoogleContactCenterInsightsView#location}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable display name of the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#display_name GoogleContactCenterInsightsView#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#id GoogleContactCenterInsightsView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#project GoogleContactCenterInsightsView#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.timeouts"></a>

```python
timeouts: GoogleContactCenterInsightsViewTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#timeouts GoogleContactCenterInsightsView#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewConfig.property.value"></a>

```python
value: str
```

- *Type:* str

A filter to reduce conversation results to a specific subset. Refer to https://cloud.google.com/contact-center/insights/docs/filtering for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#value GoogleContactCenterInsightsView#value}

---

### GoogleContactCenterInsightsViewTimeouts <a name="GoogleContactCenterInsightsViewTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_view

googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#create GoogleContactCenterInsightsView#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#delete GoogleContactCenterInsightsView#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#update GoogleContactCenterInsightsView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#create GoogleContactCenterInsightsView#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#delete GoogleContactCenterInsightsView#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_contact_center_insights_view#update GoogleContactCenterInsightsView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsViewTimeoutsOutputReference <a name="GoogleContactCenterInsightsViewTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_view

googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleContactCenterInsightsViewTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsView.GoogleContactCenterInsightsViewTimeouts">GoogleContactCenterInsightsViewTimeouts</a>

---



