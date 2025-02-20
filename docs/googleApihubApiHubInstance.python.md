# `googleApihubApiHubInstance` Submodule <a name="`googleApihubApiHubInstance` Submodule" id="@cdktf/provider-google-beta.googleApihubApiHubInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubApiHubInstance <a name="GoogleApihubApiHubInstance" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance google_apihub_api_hub_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_api_hub_instance

googleApihubApiHubInstance.GoogleApihubApiHubInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: GoogleApihubApiHubInstanceConfigA,
  location: str,
  api_hub_instance_id: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleApihubApiHubInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.apiHubInstanceId">api_hub_instance_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. Description of the ApiHub instance. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#id GoogleApihubApiHubInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#project GoogleApihubApiHubInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#config GoogleApihubApiHubInstance#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#location GoogleApihubApiHubInstance#location}

---

##### `api_hub_instance_id`<sup>Optional</sup> <a name="api_hub_instance_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.apiHubInstanceId"></a>

- *Type:* str

Optional.

Identifier to assign to the Api Hub instance. Must be unique within
scope of the parent resource. If the field is not provided,
system generated id will be used.

This value should be 4-40 characters, and valid characters
are '/a-z[0-9]-_/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#api_hub_instance_id GoogleApihubApiHubInstance#api_hub_instance_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.description"></a>

- *Type:* str

Optional. Description of the ApiHub instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#description GoogleApihubApiHubInstance#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#id GoogleApihubApiHubInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#labels GoogleApihubApiHubInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#project GoogleApihubApiHubInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#timeouts GoogleApihubApiHubInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetApiHubInstanceId">reset_api_hub_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putConfig"></a>

```python
def put_config(
  cmek_key_name: str = None,
  disable_search: typing.Union[bool, IResolvable] = None,
  encryption_type: str = None,
  vertex_location: str = None
) -> None
```

###### `cmek_key_name`<sup>Optional</sup> <a name="cmek_key_name" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putConfig.parameter.cmekKeyName"></a>

- *Type:* str

Optional.

The Customer Managed Encryption Key (CMEK) used for data encryption.
The CMEK name should follow the format of
'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)',
where the location must match the instance location.
If the CMEK is not provided, a GMEK will be created for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#cmek_key_name GoogleApihubApiHubInstance#cmek_key_name}

---

###### `disable_search`<sup>Optional</sup> <a name="disable_search" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putConfig.parameter.disableSearch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If true, the search will be disabled for the instance. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#disable_search GoogleApihubApiHubInstance#disable_search}

---

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putConfig.parameter.encryptionType"></a>

- *Type:* str

Optional.

Encryption type for the region. If the encryption type is CMEK, the
cmek_key_name must be provided. If no encryption type is provided,
GMEK will be used.
Possible values:
ENCRYPTION_TYPE_UNSPECIFIED
GMEK
CMEK

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#encryption_type GoogleApihubApiHubInstance#encryption_type}

---

###### `vertex_location`<sup>Optional</sup> <a name="vertex_location" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putConfig.parameter.vertexLocation"></a>

- *Type:* str

Optional. The name of the Vertex AI location where the data store is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#vertex_location GoogleApihubApiHubInstance#vertex_location}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#create GoogleApihubApiHubInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#delete GoogleApihubApiHubInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#update GoogleApihubApiHubInstance#update}.

---

##### `reset_api_hub_instance_id` <a name="reset_api_hub_instance_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetApiHubInstanceId"></a>

```python
def reset_api_hub_instance_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApihubApiHubInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_api_hub_instance

googleApihubApiHubInstance.GoogleApihubApiHubInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_api_hub_instance

googleApihubApiHubInstance.GoogleApihubApiHubInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_api_hub_instance

googleApihubApiHubInstance.GoogleApihubApiHubInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_api_hub_instance

googleApihubApiHubInstance.GoogleApihubApiHubInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApihubApiHubInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApihubApiHubInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApihubApiHubInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApihubApiHubInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference">GoogleApihubApiHubInstanceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference">GoogleApihubApiHubInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.apiHubInstanceIdInput">api_hub_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.apiHubInstanceId">api_hub_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.config"></a>

```python
config: GoogleApihubApiHubInstanceConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference">GoogleApihubApiHubInstanceConfigAOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.timeouts"></a>

```python
timeouts: GoogleApihubApiHubInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference">GoogleApihubApiHubInstanceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `api_hub_instance_id_input`<sup>Optional</sup> <a name="api_hub_instance_id_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.apiHubInstanceIdInput"></a>

```python
api_hub_instance_id_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.configInput"></a>

```python
config_input: GoogleApihubApiHubInstanceConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApihubApiHubInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a>]

---

##### `api_hub_instance_id`<sup>Required</sup> <a name="api_hub_instance_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.apiHubInstanceId"></a>

```python
api_hub_instance_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubApiHubInstanceConfig <a name="GoogleApihubApiHubInstanceConfig" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_api_hub_instance

googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: GoogleApihubApiHubInstanceConfigA,
  location: str,
  api_hub_instance_id: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleApihubApiHubInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.apiHubInstanceId">api_hub_instance_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.description">description</a></code> | <code>str</code> | Optional. Description of the ApiHub instance. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#id GoogleApihubApiHubInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#project GoogleApihubApiHubInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.config"></a>

```python
config: GoogleApihubApiHubInstanceConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#config GoogleApihubApiHubInstance#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#location GoogleApihubApiHubInstance#location}

---

##### `api_hub_instance_id`<sup>Optional</sup> <a name="api_hub_instance_id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.apiHubInstanceId"></a>

```python
api_hub_instance_id: str
```

- *Type:* str

Optional.

Identifier to assign to the Api Hub instance. Must be unique within
scope of the parent resource. If the field is not provided,
system generated id will be used.

This value should be 4-40 characters, and valid characters
are '/a-z[0-9]-_/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#api_hub_instance_id GoogleApihubApiHubInstance#api_hub_instance_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Description of the ApiHub instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#description GoogleApihubApiHubInstance#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#id GoogleApihubApiHubInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#labels GoogleApihubApiHubInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#project GoogleApihubApiHubInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleApihubApiHubInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#timeouts GoogleApihubApiHubInstance#timeouts}

---

### GoogleApihubApiHubInstanceConfigA <a name="GoogleApihubApiHubInstanceConfigA" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_api_hub_instance

googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA(
  cmek_key_name: str = None,
  disable_search: typing.Union[bool, IResolvable] = None,
  encryption_type: str = None,
  vertex_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.cmekKeyName">cmek_key_name</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.disableSearch">disable_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. If true, the search will be disabled for the instance. The default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.encryptionType">encryption_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.vertexLocation">vertex_location</a></code> | <code>str</code> | Optional. The name of the Vertex AI location where the data store is stored. |

---

##### `cmek_key_name`<sup>Optional</sup> <a name="cmek_key_name" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.cmekKeyName"></a>

```python
cmek_key_name: str
```

- *Type:* str

Optional.

The Customer Managed Encryption Key (CMEK) used for data encryption.
The CMEK name should follow the format of
'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)',
where the location must match the instance location.
If the CMEK is not provided, a GMEK will be created for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#cmek_key_name GoogleApihubApiHubInstance#cmek_key_name}

---

##### `disable_search`<sup>Optional</sup> <a name="disable_search" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.disableSearch"></a>

```python
disable_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. If true, the search will be disabled for the instance. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#disable_search GoogleApihubApiHubInstance#disable_search}

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Optional.

Encryption type for the region. If the encryption type is CMEK, the
cmek_key_name must be provided. If no encryption type is provided,
GMEK will be used.
Possible values:
ENCRYPTION_TYPE_UNSPECIFIED
GMEK
CMEK

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#encryption_type GoogleApihubApiHubInstance#encryption_type}

---

##### `vertex_location`<sup>Optional</sup> <a name="vertex_location" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA.property.vertexLocation"></a>

```python
vertex_location: str
```

- *Type:* str

Optional. The name of the Vertex AI location where the data store is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#vertex_location GoogleApihubApiHubInstance#vertex_location}

---

### GoogleApihubApiHubInstanceTimeouts <a name="GoogleApihubApiHubInstanceTimeouts" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_api_hub_instance

googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#create GoogleApihubApiHubInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#delete GoogleApihubApiHubInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#update GoogleApihubApiHubInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#create GoogleApihubApiHubInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#delete GoogleApihubApiHubInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_apihub_api_hub_instance#update GoogleApihubApiHubInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubApiHubInstanceConfigAOutputReference <a name="GoogleApihubApiHubInstanceConfigAOutputReference" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_api_hub_instance

googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetCmekKeyName">reset_cmek_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetDisableSearch">reset_disable_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetVertexLocation">reset_vertex_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cmek_key_name` <a name="reset_cmek_key_name" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetCmekKeyName"></a>

```python
def reset_cmek_key_name() -> None
```

##### `reset_disable_search` <a name="reset_disable_search" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetDisableSearch"></a>

```python
def reset_disable_search() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_vertex_location` <a name="reset_vertex_location" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.resetVertexLocation"></a>

```python
def reset_vertex_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.cmekKeyNameInput">cmek_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.disableSearchInput">disable_search_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.vertexLocationInput">vertex_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.cmekKeyName">cmek_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.disableSearch">disable_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.vertexLocation">vertex_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmek_key_name_input`<sup>Optional</sup> <a name="cmek_key_name_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.cmekKeyNameInput"></a>

```python
cmek_key_name_input: str
```

- *Type:* str

---

##### `disable_search_input`<sup>Optional</sup> <a name="disable_search_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.disableSearchInput"></a>

```python
disable_search_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `vertex_location_input`<sup>Optional</sup> <a name="vertex_location_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.vertexLocationInput"></a>

```python
vertex_location_input: str
```

- *Type:* str

---

##### `cmek_key_name`<sup>Required</sup> <a name="cmek_key_name" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.cmekKeyName"></a>

```python
cmek_key_name: str
```

- *Type:* str

---

##### `disable_search`<sup>Required</sup> <a name="disable_search" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.disableSearch"></a>

```python
disable_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `vertex_location`<sup>Required</sup> <a name="vertex_location" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.vertexLocation"></a>

```python
vertex_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubApiHubInstanceConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceConfigA">GoogleApihubApiHubInstanceConfigA</a>

---


### GoogleApihubApiHubInstanceTimeoutsOutputReference <a name="GoogleApihubApiHubInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_api_hub_instance

googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApihubApiHubInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubApiHubInstance.GoogleApihubApiHubInstanceTimeouts">GoogleApihubApiHubInstanceTimeouts</a>]

---



