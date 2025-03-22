# `googleClouddeployCustomTargetType` Submodule <a name="`googleClouddeployCustomTargetType` Submodule" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployCustomTargetType <a name="GoogleClouddeployCustomTargetType" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type google_clouddeploy_custom_target_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType(
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
  annotations: typing.Mapping[str] = None,
  custom_actions: GoogleClouddeployCustomTargetTypeCustomActions = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleClouddeployCustomTargetTypeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the source. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the 'CustomTargetType'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User annotations. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.customActions">custom_actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a></code> | custom_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the 'CustomTargetType'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#id GoogleClouddeployCustomTargetType#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels are attributes that can be set and used by both the user and by Cloud Deploy. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#project GoogleClouddeployCustomTargetType#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.location"></a>

- *Type:* str

The location of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#location GoogleClouddeployCustomTargetType#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.name"></a>

- *Type:* str

Name of the 'CustomTargetType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#name GoogleClouddeployCustomTargetType#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

User annotations.

These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#annotations GoogleClouddeployCustomTargetType#annotations}

---

##### `custom_actions`<sup>Optional</sup> <a name="custom_actions" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.customActions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

custom_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#custom_actions GoogleClouddeployCustomTargetType#custom_actions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.description"></a>

- *Type:* str

Description of the 'CustomTargetType'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#description GoogleClouddeployCustomTargetType#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#id GoogleClouddeployCustomTargetType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels are attributes that can be set and used by both the user and by Cloud Deploy.

Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#labels GoogleClouddeployCustomTargetType#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#project GoogleClouddeployCustomTargetType#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#timeouts GoogleClouddeployCustomTargetType#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putCustomActions">put_custom_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetCustomActions">reset_custom_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_actions` <a name="put_custom_actions" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putCustomActions"></a>

```python
def put_custom_actions(
  deploy_action: str,
  include_skaffold_modules: typing.Union[IResolvable, typing.List[GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules]] = None,
  render_action: str = None
) -> None
```

###### `deploy_action`<sup>Required</sup> <a name="deploy_action" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putCustomActions.parameter.deployAction"></a>

- *Type:* str

The Skaffold custom action responsible for deploy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#deploy_action GoogleClouddeployCustomTargetType#deploy_action}

---

###### `include_skaffold_modules`<sup>Optional</sup> <a name="include_skaffold_modules" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putCustomActions.parameter.includeSkaffoldModules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>]]

include_skaffold_modules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#include_skaffold_modules GoogleClouddeployCustomTargetType#include_skaffold_modules}

---

###### `render_action`<sup>Optional</sup> <a name="render_action" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putCustomActions.parameter.renderAction"></a>

- *Type:* str

The Skaffold custom action responsible for render operations.

If not provided then Cloud Deploy will perform the render operations via 'skaffold render'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#render_action GoogleClouddeployCustomTargetType#render_action}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#create GoogleClouddeployCustomTargetType#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#delete GoogleClouddeployCustomTargetType#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#update GoogleClouddeployCustomTargetType#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_custom_actions` <a name="reset_custom_actions" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetCustomActions"></a>

```python
def reset_custom_actions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleClouddeployCustomTargetType resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleClouddeployCustomTargetType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleClouddeployCustomTargetType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleClouddeployCustomTargetType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployCustomTargetType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActions">custom_actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customTargetTypeId">custom_target_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference">GoogleClouddeployCustomTargetTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActionsInput">custom_actions_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `custom_actions`<sup>Required</sup> <a name="custom_actions" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActions"></a>

```python
custom_actions: GoogleClouddeployCustomTargetTypeCustomActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsOutputReference</a>

---

##### `custom_target_type_id`<sup>Required</sup> <a name="custom_target_type_id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customTargetTypeId"></a>

```python
custom_target_type_id: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeouts"></a>

```python
timeouts: GoogleClouddeployCustomTargetTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference">GoogleClouddeployCustomTargetTypeTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `custom_actions_input`<sup>Optional</sup> <a name="custom_actions_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.customActionsInput"></a>

```python
custom_actions_input: GoogleClouddeployCustomTargetTypeCustomActions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleClouddeployCustomTargetTypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployCustomTargetTypeConfig <a name="GoogleClouddeployCustomTargetTypeConfig" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  annotations: typing.Mapping[str] = None,
  custom_actions: GoogleClouddeployCustomTargetTypeCustomActions = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleClouddeployCustomTargetTypeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.location">location</a></code> | <code>str</code> | The location of the source. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.name">name</a></code> | <code>str</code> | Name of the 'CustomTargetType'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User annotations. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.customActions">custom_actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a></code> | custom_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.description">description</a></code> | <code>str</code> | Description of the 'CustomTargetType'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#id GoogleClouddeployCustomTargetType#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels are attributes that can be set and used by both the user and by Cloud Deploy. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#project GoogleClouddeployCustomTargetType#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#location GoogleClouddeployCustomTargetType#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the 'CustomTargetType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#name GoogleClouddeployCustomTargetType#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User annotations.

These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#annotations GoogleClouddeployCustomTargetType#annotations}

---

##### `custom_actions`<sup>Optional</sup> <a name="custom_actions" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.customActions"></a>

```python
custom_actions: GoogleClouddeployCustomTargetTypeCustomActions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

custom_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#custom_actions GoogleClouddeployCustomTargetType#custom_actions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the 'CustomTargetType'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#description GoogleClouddeployCustomTargetType#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#id GoogleClouddeployCustomTargetType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels are attributes that can be set and used by both the user and by Cloud Deploy.

Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#labels GoogleClouddeployCustomTargetType#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#project GoogleClouddeployCustomTargetType#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeConfig.property.timeouts"></a>

```python
timeouts: GoogleClouddeployCustomTargetTypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#timeouts GoogleClouddeployCustomTargetType#timeouts}

---

### GoogleClouddeployCustomTargetTypeCustomActions <a name="GoogleClouddeployCustomTargetTypeCustomActions" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions(
  deploy_action: str,
  include_skaffold_modules: typing.Union[IResolvable, typing.List[GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules]] = None,
  render_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.deployAction">deploy_action</a></code> | <code>str</code> | The Skaffold custom action responsible for deploy operations. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.includeSkaffoldModules">include_skaffold_modules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>]]</code> | include_skaffold_modules block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.renderAction">render_action</a></code> | <code>str</code> | The Skaffold custom action responsible for render operations. |

---

##### `deploy_action`<sup>Required</sup> <a name="deploy_action" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.deployAction"></a>

```python
deploy_action: str
```

- *Type:* str

The Skaffold custom action responsible for deploy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#deploy_action GoogleClouddeployCustomTargetType#deploy_action}

---

##### `include_skaffold_modules`<sup>Optional</sup> <a name="include_skaffold_modules" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.includeSkaffoldModules"></a>

```python
include_skaffold_modules: typing.Union[IResolvable, typing.List[GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>]]

include_skaffold_modules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#include_skaffold_modules GoogleClouddeployCustomTargetType#include_skaffold_modules}

---

##### `render_action`<sup>Optional</sup> <a name="render_action" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions.property.renderAction"></a>

```python
render_action: str
```

- *Type:* str

The Skaffold custom action responsible for render operations.

If not provided then Cloud Deploy will perform the render operations via 'skaffold render'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#render_action GoogleClouddeployCustomTargetType#render_action}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules(
  configs: typing.List[str] = None,
  git: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit = None,
  google_cloud_build_repo: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo = None,
  google_cloud_storage: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.configs">configs</a></code> | <code>typing.List[str]</code> | The Skaffold Config modules to use from the specified source. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.git">git</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | git block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudBuildRepo">google_cloud_build_repo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | google_cloud_build_repo block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudStorage">google_cloud_storage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | google_cloud_storage block. |

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.configs"></a>

```python
configs: typing.List[str]
```

- *Type:* typing.List[str]

The Skaffold Config modules to use from the specified source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#configs GoogleClouddeployCustomTargetType#configs}

---

##### `git`<sup>Optional</sup> <a name="git" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.git"></a>

```python
git: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

git block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#git GoogleClouddeployCustomTargetType#git}

---

##### `google_cloud_build_repo`<sup>Optional</sup> <a name="google_cloud_build_repo" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudBuildRepo"></a>

```python
google_cloud_build_repo: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

google_cloud_build_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#google_cloud_build_repo GoogleClouddeployCustomTargetType#google_cloud_build_repo}

---

##### `google_cloud_storage`<sup>Optional</sup> <a name="google_cloud_storage" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules.property.googleCloudStorage"></a>

```python
google_cloud_storage: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

google_cloud_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#google_cloud_storage GoogleClouddeployCustomTargetType#google_cloud_storage}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit(
  repo: str,
  path: str = None,
  ref: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.repo">repo</a></code> | <code>str</code> | Git repository the package should be cloned from. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.path">path</a></code> | <code>str</code> | Relative path from the repository root to the Skaffold file. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.ref">ref</a></code> | <code>str</code> | Git ref the package should be cloned from. |

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.repo"></a>

```python
repo: str
```

- *Type:* str

Git repository the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#repo GoogleClouddeployCustomTargetType#repo}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.path"></a>

```python
path: str
```

- *Type:* str

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit.property.ref"></a>

```python
ref: str
```

- *Type:* str

Git ref the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#ref GoogleClouddeployCustomTargetType#ref}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo(
  repository: str,
  path: str = None,
  ref: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.repository">repository</a></code> | <code>str</code> | Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.path">path</a></code> | <code>str</code> | Relative path from the repository root to the Skaffold file. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.ref">ref</a></code> | <code>str</code> | Branch or tag to use when cloning the repository. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.repository"></a>

```python
repository: str
```

- *Type:* str

Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#repository GoogleClouddeployCustomTargetType#repository}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.path"></a>

```python
path: str
```

- *Type:* str

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo.property.ref"></a>

```python
ref: str
```

- *Type:* str

Branch or tag to use when cloning the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#ref GoogleClouddeployCustomTargetType#ref}

---

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage(
  source: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.source">source</a></code> | <code>str</code> | Cloud Storage source paths to copy recursively. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.path">path</a></code> | <code>str</code> | Relative path from the source to the Skaffold file. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.source"></a>

```python
source: str
```

- *Type:* str

Cloud Storage source paths to copy recursively.

For example, providing 'gs://my-bucket/dir/configs/*' will result in Skaffold copying all files within the 'dir/configs' directory in the bucket 'my-bucket'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#source GoogleClouddeployCustomTargetType#source}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage.property.path"></a>

```python
path: str
```

- *Type:* str

Relative path from the source to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

### GoogleClouddeployCustomTargetTypeTimeouts <a name="GoogleClouddeployCustomTargetTypeTimeouts" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#create GoogleClouddeployCustomTargetType#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#delete GoogleClouddeployCustomTargetType#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#update GoogleClouddeployCustomTargetType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#create GoogleClouddeployCustomTargetType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#delete GoogleClouddeployCustomTargetType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#update GoogleClouddeployCustomTargetType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetRef">reset_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repoInput">repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repo">repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `repo_input`<sup>Optional</sup> <a name="repo_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repoInput"></a>

```python
repo_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.repo"></a>

```python
repo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference.property.internalValue"></a>

```python
internal_value: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetRef">reset_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>]]

---


### GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit">put_git</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo">put_google_cloud_build_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage">put_google_cloud_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetConfigs">reset_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGit">reset_git</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudBuildRepo">reset_google_cloud_build_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudStorage">reset_google_cloud_storage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_git` <a name="put_git" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit"></a>

```python
def put_git(
  repo: str,
  path: str = None,
  ref: str = None
) -> None
```

###### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit.parameter.repo"></a>

- *Type:* str

Git repository the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#repo GoogleClouddeployCustomTargetType#repo}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit.parameter.path"></a>

- *Type:* str

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGit.parameter.ref"></a>

- *Type:* str

Git ref the package should be cloned from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#ref GoogleClouddeployCustomTargetType#ref}

---

##### `put_google_cloud_build_repo` <a name="put_google_cloud_build_repo" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo"></a>

```python
def put_google_cloud_build_repo(
  repository: str,
  path: str = None,
  ref: str = None
) -> None
```

###### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo.parameter.repository"></a>

- *Type:* str

Cloud Build 2nd gen repository in the format of 'projects/<project>/locations/<location>/connections/<connection>/repositories/<repository>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#repository GoogleClouddeployCustomTargetType#repository}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo.parameter.path"></a>

- *Type:* str

Relative path from the repository root to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudBuildRepo.parameter.ref"></a>

- *Type:* str

Branch or tag to use when cloning the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#ref GoogleClouddeployCustomTargetType#ref}

---

##### `put_google_cloud_storage` <a name="put_google_cloud_storage" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage"></a>

```python
def put_google_cloud_storage(
  source: str,
  path: str = None
) -> None
```

###### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage.parameter.source"></a>

- *Type:* str

Cloud Storage source paths to copy recursively.

For example, providing 'gs://my-bucket/dir/configs/*' will result in Skaffold copying all files within the 'dir/configs' directory in the bucket 'my-bucket'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#source GoogleClouddeployCustomTargetType#source}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.putGoogleCloudStorage.parameter.path"></a>

- *Type:* str

Relative path from the source to the Skaffold file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_clouddeploy_custom_target_type#path GoogleClouddeployCustomTargetType#path}

---

##### `reset_configs` <a name="reset_configs" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetConfigs"></a>

```python
def reset_configs() -> None
```

##### `reset_git` <a name="reset_git" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGit"></a>

```python
def reset_git() -> None
```

##### `reset_google_cloud_build_repo` <a name="reset_google_cloud_build_repo" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudBuildRepo"></a>

```python
def reset_google_cloud_build_repo() -> None
```

##### `reset_google_cloud_storage` <a name="reset_google_cloud_storage" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.resetGoogleCloudStorage"></a>

```python
def reset_google_cloud_storage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.git">git</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepo">google_cloud_build_repo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorage">google_cloud_storage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configsInput">configs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.gitInput">git_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepoInput">google_cloud_build_repo_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorageInput">google_cloud_storage_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configs">configs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git`<sup>Required</sup> <a name="git" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.git"></a>

```python
git: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGitOutputReference</a>

---

##### `google_cloud_build_repo`<sup>Required</sup> <a name="google_cloud_build_repo" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepo"></a>

```python
google_cloud_build_repo: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepoOutputReference</a>

---

##### `google_cloud_storage`<sup>Required</sup> <a name="google_cloud_storage" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorage"></a>

```python
google_cloud_storage: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorageOutputReference</a>

---

##### `configs_input`<sup>Optional</sup> <a name="configs_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configsInput"></a>

```python
configs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `git_input`<sup>Optional</sup> <a name="git_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.gitInput"></a>

```python
git_input: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGit</a>

---

##### `google_cloud_build_repo_input`<sup>Optional</sup> <a name="google_cloud_build_repo_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudBuildRepoInput"></a>

```python
google_cloud_build_repo_input: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo</a>

---

##### `google_cloud_storage_input`<sup>Optional</sup> <a name="google_cloud_storage_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.googleCloudStorageInput"></a>

```python
google_cloud_storage_input: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesGoogleCloudStorage</a>

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.configs"></a>

```python
configs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>]

---


### GoogleClouddeployCustomTargetTypeCustomActionsOutputReference <a name="GoogleClouddeployCustomTargetTypeCustomActionsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules">put_include_skaffold_modules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetIncludeSkaffoldModules">reset_include_skaffold_modules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetRenderAction">reset_render_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_include_skaffold_modules` <a name="put_include_skaffold_modules" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules"></a>

```python
def put_include_skaffold_modules(
  value: typing.Union[IResolvable, typing.List[GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.putIncludeSkaffoldModules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>]]

---

##### `reset_include_skaffold_modules` <a name="reset_include_skaffold_modules" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetIncludeSkaffoldModules"></a>

```python
def reset_include_skaffold_modules() -> None
```

##### `reset_render_action` <a name="reset_render_action" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.resetRenderAction"></a>

```python
def reset_render_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModules">include_skaffold_modules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployActionInput">deploy_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModulesInput">include_skaffold_modules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderActionInput">render_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployAction">deploy_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderAction">render_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_skaffold_modules`<sup>Required</sup> <a name="include_skaffold_modules" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModules"></a>

```python
include_skaffold_modules: GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModulesList</a>

---

##### `deploy_action_input`<sup>Optional</sup> <a name="deploy_action_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployActionInput"></a>

```python
deploy_action_input: str
```

- *Type:* str

---

##### `include_skaffold_modules_input`<sup>Optional</sup> <a name="include_skaffold_modules_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.includeSkaffoldModulesInput"></a>

```python
include_skaffold_modules_input: typing.Union[IResolvable, typing.List[GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules">GoogleClouddeployCustomTargetTypeCustomActionsIncludeSkaffoldModules</a>]]

---

##### `render_action_input`<sup>Optional</sup> <a name="render_action_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderActionInput"></a>

```python
render_action_input: str
```

- *Type:* str

---

##### `deploy_action`<sup>Required</sup> <a name="deploy_action" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.deployAction"></a>

```python
deploy_action: str
```

- *Type:* str

---

##### `render_action`<sup>Required</sup> <a name="render_action" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.renderAction"></a>

```python
render_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleClouddeployCustomTargetTypeCustomActions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeCustomActions">GoogleClouddeployCustomTargetTypeCustomActions</a>

---


### GoogleClouddeployCustomTargetTypeTimeoutsOutputReference <a name="GoogleClouddeployCustomTargetTypeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_clouddeploy_custom_target_type

googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleClouddeployCustomTargetTypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetType.GoogleClouddeployCustomTargetTypeTimeouts">GoogleClouddeployCustomTargetTypeTimeouts</a>]

---



