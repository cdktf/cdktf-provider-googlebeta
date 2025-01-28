# `googleNotebooksRuntime` Submodule <a name="`googleNotebooksRuntime` Submodule" id="@cdktf/provider-google-beta.googleNotebooksRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNotebooksRuntime <a name="GoogleNotebooksRuntime" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime google_notebooks_runtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntime(
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
  access_config: GoogleNotebooksRuntimeAccessConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  software_config: GoogleNotebooksRuntimeSoftwareConfig = None,
  timeouts: GoogleNotebooksRuntimeTimeouts = None,
  virtual_machine: GoogleNotebooksRuntimeVirtualMachine = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.location">location</a></code> | <code>str</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.name">name</a></code> | <code>str</code> | The name specified for the Notebook runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#id GoogleNotebooksRuntime#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#project GoogleNotebooksRuntime#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts">GoogleNotebooksRuntimeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a></code> | virtual_machine block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.location"></a>

- *Type:* str

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#location GoogleNotebooksRuntime#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.name"></a>

- *Type:* str

The name specified for the Notebook runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#name GoogleNotebooksRuntime#name}

---

##### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.accessConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#access_config GoogleNotebooksRuntime#access_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#id GoogleNotebooksRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels to associate with this runtime.

Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#labels GoogleNotebooksRuntime#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#project GoogleNotebooksRuntime#project}.

---

##### `software_config`<sup>Optional</sup> <a name="software_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.softwareConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#software_config GoogleNotebooksRuntime#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts">GoogleNotebooksRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#timeouts GoogleNotebooksRuntime#timeouts}

---

##### `virtual_machine`<sup>Optional</sup> <a name="virtual_machine" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.virtualMachine"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#virtual_machine GoogleNotebooksRuntime#virtual_machine}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putAccessConfig">put_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig">put_software_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putVirtualMachine">put_virtual_machine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetAccessConfig">reset_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetSoftwareConfig">reset_software_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetVirtualMachine">reset_virtual_machine</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_config` <a name="put_access_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putAccessConfig"></a>

```python
def put_access_config(
  access_type: str = None,
  runtime_owner: str = None
) -> None
```

###### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putAccessConfig.parameter.accessType"></a>

- *Type:* str

The type of access mode this instance. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#RuntimeAccessType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#access_type GoogleNotebooksRuntime#access_type}

---

###### `runtime_owner`<sup>Optional</sup> <a name="runtime_owner" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putAccessConfig.parameter.runtimeOwner"></a>

- *Type:* str

The owner of this runtime after creation. Format: 'alias@example.com'. Currently supports one owner only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#runtime_owner GoogleNotebooksRuntime#runtime_owner}

---

##### `put_software_config` <a name="put_software_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig"></a>

```python
def put_software_config(
  custom_gpu_driver_path: str = None,
  enable_health_monitoring: typing.Union[bool, IResolvable] = None,
  idle_shutdown: typing.Union[bool, IResolvable] = None,
  idle_shutdown_timeout: typing.Union[int, float] = None,
  install_gpu_driver: typing.Union[bool, IResolvable] = None,
  kernels: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeSoftwareConfigKernels]] = None,
  notebook_upgrade_schedule: str = None,
  post_startup_script: str = None,
  post_startup_script_behavior: str = None
) -> None
```

###### `custom_gpu_driver_path`<sup>Optional</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig.parameter.customGpuDriverPath"></a>

- *Type:* str

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#custom_gpu_driver_path GoogleNotebooksRuntime#custom_gpu_driver_path}

---

###### `enable_health_monitoring`<sup>Optional</sup> <a name="enable_health_monitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig.parameter.enableHealthMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verifies core internal services are running. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#enable_health_monitoring GoogleNotebooksRuntime#enable_health_monitoring}

---

###### `idle_shutdown`<sup>Optional</sup> <a name="idle_shutdown" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig.parameter.idleShutdown"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Runtime will automatically shutdown after idle_shutdown_time. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#idle_shutdown GoogleNotebooksRuntime#idle_shutdown}

---

###### `idle_shutdown_timeout`<sup>Optional</sup> <a name="idle_shutdown_timeout" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig.parameter.idleShutdownTimeout"></a>

- *Type:* typing.Union[int, float]

Time in minutes to wait before shuting down runtime. Default: 180 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#idle_shutdown_timeout GoogleNotebooksRuntime#idle_shutdown_timeout}

---

###### `install_gpu_driver`<sup>Optional</sup> <a name="install_gpu_driver" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig.parameter.installGpuDriver"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Install Nvidia Driver automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#install_gpu_driver GoogleNotebooksRuntime#install_gpu_driver}

---

###### `kernels`<sup>Optional</sup> <a name="kernels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig.parameter.kernels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels">GoogleNotebooksRuntimeSoftwareConfigKernels</a>]]

kernels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#kernels GoogleNotebooksRuntime#kernels}

---

###### `notebook_upgrade_schedule`<sup>Optional</sup> <a name="notebook_upgrade_schedule" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig.parameter.notebookUpgradeSchedule"></a>

- *Type:* str

Cron expression in UTC timezone for schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#notebook_upgrade_schedule GoogleNotebooksRuntime#notebook_upgrade_schedule}

---

###### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig.parameter.postStartupScript"></a>

- *Type:* str

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or
Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#post_startup_script GoogleNotebooksRuntime#post_startup_script}

---

###### `post_startup_script_behavior`<sup>Optional</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig.parameter.postStartupScriptBehavior"></a>

- *Type:* str

Behavior for the post startup script. Possible values: ["POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#post_startup_script_behavior GoogleNotebooksRuntime#post_startup_script_behavior}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#create GoogleNotebooksRuntime#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#delete GoogleNotebooksRuntime#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#update GoogleNotebooksRuntime#update}.

---

##### `put_virtual_machine` <a name="put_virtual_machine" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putVirtualMachine"></a>

```python
def put_virtual_machine(
  virtual_machine_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig = None
) -> None
```

###### `virtual_machine_config`<sup>Optional</sup> <a name="virtual_machine_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putVirtualMachine.parameter.virtualMachineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

virtual_machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#virtual_machine_config GoogleNotebooksRuntime#virtual_machine_config}

---

##### `reset_access_config` <a name="reset_access_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetAccessConfig"></a>

```python
def reset_access_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_software_config` <a name="reset_software_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetSoftwareConfig"></a>

```python
def reset_software_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_machine` <a name="reset_virtual_machine" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetVirtualMachine"></a>

```python
def reset_virtual_machine() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNotebooksRuntime resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntime.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntime.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntime.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntime.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNotebooksRuntime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNotebooksRuntime to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNotebooksRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNotebooksRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference">GoogleNotebooksRuntimeAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.healthState">health_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList">GoogleNotebooksRuntimeMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference">GoogleNotebooksRuntimeSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference">GoogleNotebooksRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference">GoogleNotebooksRuntimeVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.accessConfigInput">access_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.softwareConfigInput">software_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts">GoogleNotebooksRuntimeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.virtualMachineInput">virtual_machine_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.accessConfig"></a>

```python
access_config: GoogleNotebooksRuntimeAccessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference">GoogleNotebooksRuntimeAccessConfigOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `health_state`<sup>Required</sup> <a name="health_state" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.healthState"></a>

```python
health_state: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.metrics"></a>

```python
metrics: GoogleNotebooksRuntimeMetricsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList">GoogleNotebooksRuntimeMetricsList</a>

---

##### `software_config`<sup>Required</sup> <a name="software_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.softwareConfig"></a>

```python
software_config: GoogleNotebooksRuntimeSoftwareConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference">GoogleNotebooksRuntimeSoftwareConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.timeouts"></a>

```python
timeouts: GoogleNotebooksRuntimeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference">GoogleNotebooksRuntimeTimeoutsOutputReference</a>

---

##### `virtual_machine`<sup>Required</sup> <a name="virtual_machine" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.virtualMachine"></a>

```python
virtual_machine: GoogleNotebooksRuntimeVirtualMachineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference">GoogleNotebooksRuntimeVirtualMachineOutputReference</a>

---

##### `access_config_input`<sup>Optional</sup> <a name="access_config_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.accessConfigInput"></a>

```python
access_config_input: GoogleNotebooksRuntimeAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `software_config_input`<sup>Optional</sup> <a name="software_config_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.softwareConfigInput"></a>

```python
software_config_input: GoogleNotebooksRuntimeSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNotebooksRuntimeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts">GoogleNotebooksRuntimeTimeouts</a>]

---

##### `virtual_machine_input`<sup>Optional</sup> <a name="virtual_machine_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.virtualMachineInput"></a>

```python
virtual_machine_input: GoogleNotebooksRuntimeVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNotebooksRuntimeAccessConfig <a name="GoogleNotebooksRuntimeAccessConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig(
  access_type: str = None,
  runtime_owner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig.property.accessType">access_type</a></code> | <code>str</code> | The type of access mode this instance. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#RuntimeAccessType'. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig.property.runtimeOwner">runtime_owner</a></code> | <code>str</code> | The owner of this runtime after creation. Format: 'alias@example.com'. Currently supports one owner only. |

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

The type of access mode this instance. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#RuntimeAccessType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#access_type GoogleNotebooksRuntime#access_type}

---

##### `runtime_owner`<sup>Optional</sup> <a name="runtime_owner" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig.property.runtimeOwner"></a>

```python
runtime_owner: str
```

- *Type:* str

The owner of this runtime after creation. Format: 'alias@example.com'. Currently supports one owner only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#runtime_owner GoogleNotebooksRuntime#runtime_owner}

---

### GoogleNotebooksRuntimeConfig <a name="GoogleNotebooksRuntimeConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  access_config: GoogleNotebooksRuntimeAccessConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  software_config: GoogleNotebooksRuntimeSoftwareConfig = None,
  timeouts: GoogleNotebooksRuntimeTimeouts = None,
  virtual_machine: GoogleNotebooksRuntimeVirtualMachine = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.location">location</a></code> | <code>str</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.name">name</a></code> | <code>str</code> | The name specified for the Notebook runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#id GoogleNotebooksRuntime#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#project GoogleNotebooksRuntime#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts">GoogleNotebooksRuntimeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a></code> | virtual_machine block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#location GoogleNotebooksRuntime#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name specified for the Notebook runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#name GoogleNotebooksRuntime#name}

---

##### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.accessConfig"></a>

```python
access_config: GoogleNotebooksRuntimeAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#access_config GoogleNotebooksRuntime#access_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#id GoogleNotebooksRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels to associate with this runtime.

Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#labels GoogleNotebooksRuntime#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#project GoogleNotebooksRuntime#project}.

---

##### `software_config`<sup>Optional</sup> <a name="software_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.softwareConfig"></a>

```python
software_config: GoogleNotebooksRuntimeSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#software_config GoogleNotebooksRuntime#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.timeouts"></a>

```python
timeouts: GoogleNotebooksRuntimeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts">GoogleNotebooksRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#timeouts GoogleNotebooksRuntime#timeouts}

---

##### `virtual_machine`<sup>Optional</sup> <a name="virtual_machine" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.virtualMachine"></a>

```python
virtual_machine: GoogleNotebooksRuntimeVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#virtual_machine GoogleNotebooksRuntime#virtual_machine}

---

### GoogleNotebooksRuntimeMetrics <a name="GoogleNotebooksRuntimeMetrics" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeMetrics()
```


### GoogleNotebooksRuntimeSoftwareConfig <a name="GoogleNotebooksRuntimeSoftwareConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig(
  custom_gpu_driver_path: str = None,
  enable_health_monitoring: typing.Union[bool, IResolvable] = None,
  idle_shutdown: typing.Union[bool, IResolvable] = None,
  idle_shutdown_timeout: typing.Union[int, float] = None,
  install_gpu_driver: typing.Union[bool, IResolvable] = None,
  kernels: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeSoftwareConfigKernels]] = None,
  notebook_upgrade_schedule: str = None,
  post_startup_script: str = None,
  post_startup_script_behavior: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.customGpuDriverPath">custom_gpu_driver_path</a></code> | <code>str</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.enableHealthMonitoring">enable_health_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Verifies core internal services are running. Default: True. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.idleShutdown">idle_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Runtime will automatically shutdown after idle_shutdown_time. Default: True. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.idleShutdownTimeout">idle_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | Time in minutes to wait before shuting down runtime. Default: 180 minutes. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.installGpuDriver">install_gpu_driver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Install Nvidia Driver automatically. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.kernels">kernels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels">GoogleNotebooksRuntimeSoftwareConfigKernels</a>]]</code> | kernels block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.notebookUpgradeSchedule">notebook_upgrade_schedule</a></code> | <code>str</code> | Cron expression in UTC timezone for schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.postStartupScriptBehavior">post_startup_script_behavior</a></code> | <code>str</code> | Behavior for the post startup script. Possible values: ["POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |

---

##### `custom_gpu_driver_path`<sup>Optional</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.customGpuDriverPath"></a>

```python
custom_gpu_driver_path: str
```

- *Type:* str

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#custom_gpu_driver_path GoogleNotebooksRuntime#custom_gpu_driver_path}

---

##### `enable_health_monitoring`<sup>Optional</sup> <a name="enable_health_monitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.enableHealthMonitoring"></a>

```python
enable_health_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verifies core internal services are running. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#enable_health_monitoring GoogleNotebooksRuntime#enable_health_monitoring}

---

##### `idle_shutdown`<sup>Optional</sup> <a name="idle_shutdown" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.idleShutdown"></a>

```python
idle_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Runtime will automatically shutdown after idle_shutdown_time. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#idle_shutdown GoogleNotebooksRuntime#idle_shutdown}

---

##### `idle_shutdown_timeout`<sup>Optional</sup> <a name="idle_shutdown_timeout" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.idleShutdownTimeout"></a>

```python
idle_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in minutes to wait before shuting down runtime. Default: 180 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#idle_shutdown_timeout GoogleNotebooksRuntime#idle_shutdown_timeout}

---

##### `install_gpu_driver`<sup>Optional</sup> <a name="install_gpu_driver" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.installGpuDriver"></a>

```python
install_gpu_driver: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Install Nvidia Driver automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#install_gpu_driver GoogleNotebooksRuntime#install_gpu_driver}

---

##### `kernels`<sup>Optional</sup> <a name="kernels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.kernels"></a>

```python
kernels: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeSoftwareConfigKernels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels">GoogleNotebooksRuntimeSoftwareConfigKernels</a>]]

kernels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#kernels GoogleNotebooksRuntime#kernels}

---

##### `notebook_upgrade_schedule`<sup>Optional</sup> <a name="notebook_upgrade_schedule" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.notebookUpgradeSchedule"></a>

```python
notebook_upgrade_schedule: str
```

- *Type:* str

Cron expression in UTC timezone for schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#notebook_upgrade_schedule GoogleNotebooksRuntime#notebook_upgrade_schedule}

---

##### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or
Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#post_startup_script GoogleNotebooksRuntime#post_startup_script}

---

##### `post_startup_script_behavior`<sup>Optional</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.postStartupScriptBehavior"></a>

```python
post_startup_script_behavior: str
```

- *Type:* str

Behavior for the post startup script. Possible values: ["POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#post_startup_script_behavior GoogleNotebooksRuntime#post_startup_script_behavior}

---

### GoogleNotebooksRuntimeSoftwareConfigKernels <a name="GoogleNotebooksRuntimeSoftwareConfigKernels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels(
  repository: str,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels.property.repository">repository</a></code> | <code>str</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels.property.tag">tag</a></code> | <code>str</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels.property.repository"></a>

```python
repository: str
```

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#repository GoogleNotebooksRuntime#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#tag GoogleNotebooksRuntime#tag}

---

### GoogleNotebooksRuntimeTimeouts <a name="GoogleNotebooksRuntimeTimeouts" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#create GoogleNotebooksRuntime#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#delete GoogleNotebooksRuntime#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#update GoogleNotebooksRuntime#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#create GoogleNotebooksRuntime#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#delete GoogleNotebooksRuntime#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#update GoogleNotebooksRuntime#update}.

---

### GoogleNotebooksRuntimeVirtualMachine <a name="GoogleNotebooksRuntimeVirtualMachine" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine(
  virtual_machine_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine.property.virtualMachineConfig">virtual_machine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | virtual_machine_config block. |

---

##### `virtual_machine_config`<sup>Optional</sup> <a name="virtual_machine_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine.property.virtualMachineConfig"></a>

```python
virtual_machine_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

virtual_machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#virtual_machine_config GoogleNotebooksRuntime#virtual_machine_config}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig(
  data_disk: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk,
  machine_type: str,
  accelerator_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig = None,
  container_images: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]] = None,
  encryption_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig = None,
  internal_ip_only: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  network: str = None,
  nic_type: str = None,
  reserved_ip_range: str = None,
  shielded_instance_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig = None,
  subnet: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.dataDisk">data_disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | data_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.machineType">machine_type</a></code> | <code>str</code> | The Compute Engine machine type used for runtimes. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.containerImages">container_images</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]</code> | container_images block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.internalIpOnly">internal_ip_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, runtime will only have internal IP addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com /compute/docs/storing-retrieving-metadata#project_and_instance _metadata)). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.network">network</a></code> | <code>str</code> | The Compute Engine network to be used for machine communications. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.nicType">nic_type</a></code> | <code>str</code> | The type of vNIC to be used on this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.reservedIpRange">reserved_ip_range</a></code> | <code>str</code> | Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.subnet">subnet</a></code> | <code>str</code> | The Compute Engine subnetwork to be used for machine communications. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | The Compute Engine tags to add to runtime (see [Tagging instances] (https://cloud.google.com/compute/docs/ label-or-tag-resources#tags)). |

---

##### `data_disk`<sup>Required</sup> <a name="data_disk" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.dataDisk"></a>

```python
data_disk: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#data_disk GoogleNotebooksRuntime#data_disk}

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The Compute Engine machine type used for runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#machine_type GoogleNotebooksRuntime#machine_type}

---

##### `accelerator_config`<sup>Optional</sup> <a name="accelerator_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.acceleratorConfig"></a>

```python
accelerator_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#accelerator_config GoogleNotebooksRuntime#accelerator_config}

---

##### `container_images`<sup>Optional</sup> <a name="container_images" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.containerImages"></a>

```python
container_images: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]

container_images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#container_images GoogleNotebooksRuntime#container_images}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.encryptionConfig"></a>

```python
encryption_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#encryption_config GoogleNotebooksRuntime#encryption_config}

---

##### `internal_ip_only`<sup>Optional</sup> <a name="internal_ip_only" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.internalIpOnly"></a>

```python
internal_ip_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, runtime will only have internal IP addresses.

By default,
runtimes are not restricted to internal IP addresses, and will
have ephemeral external IP addresses assigned to each vm. This
'internal_ip_only' restriction can only be enabled for subnetwork
enabled networks, and all dependencies must be configured to be
accessible without external IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#internal_ip_only GoogleNotebooksRuntime#internal_ip_only}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels to associate with this runtime.

Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#labels GoogleNotebooksRuntime#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com /compute/docs/storing-retrieving-metadata#project_and_instance _metadata)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#metadata GoogleNotebooksRuntime#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The Compute Engine network to be used for machine communications.

Cannot be specified with subnetwork. If neither 'network' nor
'subnet' is specified, the "default" network of the project is
used, if it exists. A full URL or partial URI. Examples:

* 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/global/default'
* 'projects/[project_id]/regions/global/default'
  Runtimes are managed resources inside Google Infrastructure.
  Runtimes support the following network configurations:
* Google Managed Network (Network & subnet are empty)
* Consumer Project VPC (network & subnet are required). Requires
  configuring Private Service Access.
* Shared VPC (network & subnet are required). Requires
  configuring Private Service Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#network GoogleNotebooksRuntime#network}

---

##### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

The type of vNIC to be used on this interface.

This may be gVNIC
or VirtioNet. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#nic_type GoogleNotebooksRuntime#nic_type}

---

##### `reserved_ip_range`<sup>Optional</sup> <a name="reserved_ip_range" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.reservedIpRange"></a>

```python
reserved_ip_range: str
```

- *Type:* str

Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#reserved_ip_range GoogleNotebooksRuntime#reserved_ip_range}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#shielded_instance_config GoogleNotebooksRuntime#shielded_instance_config}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

The Compute Engine subnetwork to be used for machine communications.

Cannot be specified with network. A full URL or
partial URI are valid. Examples:

* 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/us-east1/subnetworks/sub0'
* 'projects/[project_id]/regions/us-east1/subnetworks/sub0'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#subnet GoogleNotebooksRuntime#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

The Compute Engine tags to add to runtime (see [Tagging instances] (https://cloud.google.com/compute/docs/ label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#tags GoogleNotebooksRuntime#tags}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig(
  core_count: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.type">type</a></code> | <code>str</code> | Accelerator model. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#AcceleratorType'. |

---

##### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#core_count GoogleNotebooksRuntime#core_count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Accelerator model. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#AcceleratorType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#type GoogleNotebooksRuntime#type}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages(
  repository: str,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.repository">repository</a></code> | <code>str</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.tag">tag</a></code> | <code>str</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.repository"></a>

```python
repository: str
```

- *Type:* str

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#repository GoogleNotebooksRuntime#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#tag GoogleNotebooksRuntime#tag}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk(
  initialize_params: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams = None,
  interface: str = None,
  mode: str = None,
  source: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.initializeParams">initialize_params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | initialize_params block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.interface">interface</a></code> | <code>str</code> | "Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.mode">mode</a></code> | <code>str</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.source">source</a></code> | <code>str</code> | Specifies a valid partial or full URL to an existing Persistent Disk resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.type">type</a></code> | <code>str</code> | Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT. |

---

##### `initialize_params`<sup>Optional</sup> <a name="initialize_params" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.initializeParams"></a>

```python
initialize_params: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#initialize_params GoogleNotebooksRuntime#initialize_params}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.interface"></a>

```python
interface: str
```

- *Type:* str

"Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI. Persistent
disks must always use SCSI and the request will fail if you attempt
to attach a persistent disk in any other format than SCSI. Local SSDs
can use either NVME or SCSI. For performance characteristics of SCSI
over NVMe, see Local SSD performance. Valid values: * NVME * SCSI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#interface GoogleNotebooksRuntime#interface}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If not specified, the default is to attach
the disk in READ_WRITE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#mode GoogleNotebooksRuntime#mode}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.source"></a>

```python
source: str
```

- *Type:* str

Specifies a valid partial or full URL to an existing Persistent Disk resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#source GoogleNotebooksRuntime#source}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#type GoogleNotebooksRuntime#type}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams(
  description: str = None,
  disk_name: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  disk_type: str = None,
  labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.description">description</a></code> | <code>str</code> | Provide this property when creating the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskName">disk_name</a></code> | <code>str</code> | Specifies the disk name. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Specifies the size of the disk in base-2 GB. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskType">disk_type</a></code> | <code>str</code> | The type of the boot disk attached to this runtime, defaults to standard persistent disk. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#disktype'. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this disk. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.description"></a>

```python
description: str
```

- *Type:* str

Provide this property when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#description GoogleNotebooksRuntime#description}

---

##### `disk_name`<sup>Optional</sup> <a name="disk_name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

Specifies the disk name.

If not specified, the default is
to use the name of the instance. If the disk with the
instance name exists already in the given zone/region, a
new name will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#disk_name GoogleNotebooksRuntime#disk_name}

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the size of the disk in base-2 GB.

If not
specified, the disk will be the same size as the image
(usually 10GB). If specified, the size must be equal to
or larger than 10GB. Default 100 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#disk_size_gb GoogleNotebooksRuntime#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

The type of the boot disk attached to this runtime, defaults to standard persistent disk. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#disktype'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#disk_type GoogleNotebooksRuntime#disk_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this disk.

These can be later modified
by the disks.setLabels method. This field is only
applicable for persistent disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#labels GoogleNotebooksRuntime#labels}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks.

It has the following format:
'projects/{PROJECT_ID}/locations/{REGION}/keyRings/
{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#kms_key GoogleNotebooksRuntime#kms_key}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has Secure Boot enabled.Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the boot integrity of
the instance. The attestation is performed against the
integrity policy baseline. This baseline is initially derived
from the implicitly trusted boot image when the instance is
created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#enable_integrity_monitoring GoogleNotebooksRuntime#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#enable_secure_boot GoogleNotebooksRuntime#enable_secure_boot}

---

##### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#enable_vtpm GoogleNotebooksRuntime#enable_vtpm}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNotebooksRuntimeAccessConfigOutputReference <a name="GoogleNotebooksRuntimeAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resetAccessType">reset_access_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resetRuntimeOwner">reset_runtime_owner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_type` <a name="reset_access_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resetAccessType"></a>

```python
def reset_access_type() -> None
```

##### `reset_runtime_owner` <a name="reset_runtime_owner" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resetRuntimeOwner"></a>

```python
def reset_runtime_owner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.proxyUri">proxy_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.runtimeOwnerInput">runtime_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.runtimeOwner">runtime_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `proxy_uri`<sup>Required</sup> <a name="proxy_uri" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.proxyUri"></a>

```python
proxy_uri: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `runtime_owner_input`<sup>Optional</sup> <a name="runtime_owner_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.runtimeOwnerInput"></a>

```python
runtime_owner_input: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `runtime_owner`<sup>Required</sup> <a name="runtime_owner" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.runtimeOwner"></a>

```python
runtime_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksRuntimeAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a>

---


### GoogleNotebooksRuntimeMetricsList <a name="GoogleNotebooksRuntimeMetricsList" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNotebooksRuntimeMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNotebooksRuntimeMetricsOutputReference <a name="GoogleNotebooksRuntimeMetricsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.systemMetrics">system_metrics</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetrics">GoogleNotebooksRuntimeMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_metrics`<sup>Required</sup> <a name="system_metrics" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.systemMetrics"></a>

```python
system_metrics: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksRuntimeMetrics
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetrics">GoogleNotebooksRuntimeMetrics</a>

---


### GoogleNotebooksRuntimeSoftwareConfigKernelsList <a name="GoogleNotebooksRuntimeSoftwareConfigKernelsList" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels">GoogleNotebooksRuntimeSoftwareConfigKernels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeSoftwareConfigKernels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels">GoogleNotebooksRuntimeSoftwareConfigKernels</a>]]

---


### GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference <a name="GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels">GoogleNotebooksRuntimeSoftwareConfigKernels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNotebooksRuntimeSoftwareConfigKernels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels">GoogleNotebooksRuntimeSoftwareConfigKernels</a>]

---


### GoogleNotebooksRuntimeSoftwareConfigOutputReference <a name="GoogleNotebooksRuntimeSoftwareConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.putKernels">put_kernels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetCustomGpuDriverPath">reset_custom_gpu_driver_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetEnableHealthMonitoring">reset_enable_health_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdown">reset_idle_shutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdownTimeout">reset_idle_shutdown_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetInstallGpuDriver">reset_install_gpu_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetKernels">reset_kernels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetNotebookUpgradeSchedule">reset_notebook_upgrade_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScript">reset_post_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScriptBehavior">reset_post_startup_script_behavior</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kernels` <a name="put_kernels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.putKernels"></a>

```python
def put_kernels(
  value: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeSoftwareConfigKernels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.putKernels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels">GoogleNotebooksRuntimeSoftwareConfigKernels</a>]]

---

##### `reset_custom_gpu_driver_path` <a name="reset_custom_gpu_driver_path" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetCustomGpuDriverPath"></a>

```python
def reset_custom_gpu_driver_path() -> None
```

##### `reset_enable_health_monitoring` <a name="reset_enable_health_monitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetEnableHealthMonitoring"></a>

```python
def reset_enable_health_monitoring() -> None
```

##### `reset_idle_shutdown` <a name="reset_idle_shutdown" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdown"></a>

```python
def reset_idle_shutdown() -> None
```

##### `reset_idle_shutdown_timeout` <a name="reset_idle_shutdown_timeout" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdownTimeout"></a>

```python
def reset_idle_shutdown_timeout() -> None
```

##### `reset_install_gpu_driver` <a name="reset_install_gpu_driver" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetInstallGpuDriver"></a>

```python
def reset_install_gpu_driver() -> None
```

##### `reset_kernels` <a name="reset_kernels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetKernels"></a>

```python
def reset_kernels() -> None
```

##### `reset_notebook_upgrade_schedule` <a name="reset_notebook_upgrade_schedule" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetNotebookUpgradeSchedule"></a>

```python
def reset_notebook_upgrade_schedule() -> None
```

##### `reset_post_startup_script` <a name="reset_post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScript"></a>

```python
def reset_post_startup_script() -> None
```

##### `reset_post_startup_script_behavior` <a name="reset_post_startup_script_behavior" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScriptBehavior"></a>

```python
def reset_post_startup_script_behavior() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.kernels">kernels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList">GoogleNotebooksRuntimeSoftwareConfigKernelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.upgradeable">upgradeable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPathInput">custom_gpu_driver_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoringInput">enable_health_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownInput">idle_shutdown_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeoutInput">idle_shutdown_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriverInput">install_gpu_driver_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.kernelsInput">kernels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels">GoogleNotebooksRuntimeSoftwareConfigKernels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeScheduleInput">notebook_upgrade_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehaviorInput">post_startup_script_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptInput">post_startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPath">custom_gpu_driver_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoring">enable_health_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdown">idle_shutdown</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeout">idle_shutdown_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriver">install_gpu_driver</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeSchedule">notebook_upgrade_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehavior">post_startup_script_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kernels`<sup>Required</sup> <a name="kernels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.kernels"></a>

```python
kernels: GoogleNotebooksRuntimeSoftwareConfigKernelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList">GoogleNotebooksRuntimeSoftwareConfigKernelsList</a>

---

##### `upgradeable`<sup>Required</sup> <a name="upgradeable" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.upgradeable"></a>

```python
upgradeable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `custom_gpu_driver_path_input`<sup>Optional</sup> <a name="custom_gpu_driver_path_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPathInput"></a>

```python
custom_gpu_driver_path_input: str
```

- *Type:* str

---

##### `enable_health_monitoring_input`<sup>Optional</sup> <a name="enable_health_monitoring_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoringInput"></a>

```python
enable_health_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_shutdown_input`<sup>Optional</sup> <a name="idle_shutdown_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownInput"></a>

```python
idle_shutdown_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_shutdown_timeout_input`<sup>Optional</sup> <a name="idle_shutdown_timeout_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeoutInput"></a>

```python
idle_shutdown_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `install_gpu_driver_input`<sup>Optional</sup> <a name="install_gpu_driver_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriverInput"></a>

```python
install_gpu_driver_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kernels_input`<sup>Optional</sup> <a name="kernels_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.kernelsInput"></a>

```python
kernels_input: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeSoftwareConfigKernels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels">GoogleNotebooksRuntimeSoftwareConfigKernels</a>]]

---

##### `notebook_upgrade_schedule_input`<sup>Optional</sup> <a name="notebook_upgrade_schedule_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeScheduleInput"></a>

```python
notebook_upgrade_schedule_input: str
```

- *Type:* str

---

##### `post_startup_script_behavior_input`<sup>Optional</sup> <a name="post_startup_script_behavior_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```python
post_startup_script_behavior_input: str
```

- *Type:* str

---

##### `post_startup_script_input`<sup>Optional</sup> <a name="post_startup_script_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptInput"></a>

```python
post_startup_script_input: str
```

- *Type:* str

---

##### `custom_gpu_driver_path`<sup>Required</sup> <a name="custom_gpu_driver_path" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPath"></a>

```python
custom_gpu_driver_path: str
```

- *Type:* str

---

##### `enable_health_monitoring`<sup>Required</sup> <a name="enable_health_monitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoring"></a>

```python
enable_health_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_shutdown`<sup>Required</sup> <a name="idle_shutdown" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdown"></a>

```python
idle_shutdown: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idle_shutdown_timeout`<sup>Required</sup> <a name="idle_shutdown_timeout" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeout"></a>

```python
idle_shutdown_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `install_gpu_driver`<sup>Required</sup> <a name="install_gpu_driver" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriver"></a>

```python
install_gpu_driver: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notebook_upgrade_schedule`<sup>Required</sup> <a name="notebook_upgrade_schedule" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeSchedule"></a>

```python
notebook_upgrade_schedule: str
```

- *Type:* str

---

##### `post_startup_script`<sup>Required</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

---

##### `post_startup_script_behavior`<sup>Required</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehavior"></a>

```python
post_startup_script_behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksRuntimeSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a>

---


### GoogleNotebooksRuntimeTimeoutsOutputReference <a name="GoogleNotebooksRuntimeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts">GoogleNotebooksRuntimeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNotebooksRuntimeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts">GoogleNotebooksRuntimeTimeouts</a>]

---


### GoogleNotebooksRuntimeVirtualMachineOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig">put_virtual_machine_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.resetVirtualMachineConfig">reset_virtual_machine_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_virtual_machine_config` <a name="put_virtual_machine_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig"></a>

```python
def put_virtual_machine_config(
  data_disk: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk,
  machine_type: str,
  accelerator_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig = None,
  container_images: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]] = None,
  encryption_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig = None,
  internal_ip_only: typing.Union[bool, IResolvable] = None,
  labels: typing.Mapping[str] = None,
  metadata: typing.Mapping[str] = None,
  network: str = None,
  nic_type: str = None,
  reserved_ip_range: str = None,
  shielded_instance_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig = None,
  subnet: str = None,
  tags: typing.List[str] = None
) -> None
```

###### `data_disk`<sup>Required</sup> <a name="data_disk" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.dataDisk"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#data_disk GoogleNotebooksRuntime#data_disk}

---

###### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.machineType"></a>

- *Type:* str

The Compute Engine machine type used for runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#machine_type GoogleNotebooksRuntime#machine_type}

---

###### `accelerator_config`<sup>Optional</sup> <a name="accelerator_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.acceleratorConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#accelerator_config GoogleNotebooksRuntime#accelerator_config}

---

###### `container_images`<sup>Optional</sup> <a name="container_images" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.containerImages"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]

container_images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#container_images GoogleNotebooksRuntime#container_images}

---

###### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#encryption_config GoogleNotebooksRuntime#encryption_config}

---

###### `internal_ip_only`<sup>Optional</sup> <a name="internal_ip_only" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.internalIpOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, runtime will only have internal IP addresses.

By default,
runtimes are not restricted to internal IP addresses, and will
have ephemeral external IP addresses assigned to each vm. This
'internal_ip_only' restriction can only be enabled for subnetwork
enabled networks, and all dependencies must be configured to be
accessible without external IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#internal_ip_only GoogleNotebooksRuntime#internal_ip_only}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels to associate with this runtime.

Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#labels GoogleNotebooksRuntime#labels}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com /compute/docs/storing-retrieving-metadata#project_and_instance _metadata)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#metadata GoogleNotebooksRuntime#metadata}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.network"></a>

- *Type:* str

The Compute Engine network to be used for machine communications.

Cannot be specified with subnetwork. If neither 'network' nor
'subnet' is specified, the "default" network of the project is
used, if it exists. A full URL or partial URI. Examples:

* 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/global/default'
* 'projects/[project_id]/regions/global/default'
  Runtimes are managed resources inside Google Infrastructure.
  Runtimes support the following network configurations:
* Google Managed Network (Network & subnet are empty)
* Consumer Project VPC (network & subnet are required). Requires
  configuring Private Service Access.
* Shared VPC (network & subnet are required). Requires
  configuring Private Service Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#network GoogleNotebooksRuntime#network}

---

###### `nic_type`<sup>Optional</sup> <a name="nic_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.nicType"></a>

- *Type:* str

The type of vNIC to be used on this interface.

This may be gVNIC
or VirtioNet. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#nic_type GoogleNotebooksRuntime#nic_type}

---

###### `reserved_ip_range`<sup>Optional</sup> <a name="reserved_ip_range" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.reservedIpRange"></a>

- *Type:* str

Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#reserved_ip_range GoogleNotebooksRuntime#reserved_ip_range}

---

###### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#shielded_instance_config GoogleNotebooksRuntime#shielded_instance_config}

---

###### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.subnet"></a>

- *Type:* str

The Compute Engine subnetwork to be used for machine communications.

Cannot be specified with network. A full URL or
partial URI are valid. Examples:

* 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/us-east1/subnetworks/sub0'
* 'projects/[project_id]/regions/us-east1/subnetworks/sub0'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#subnet GoogleNotebooksRuntime#subnet}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.tags"></a>

- *Type:* typing.List[str]

The Compute Engine tags to add to runtime (see [Tagging instances] (https://cloud.google.com/compute/docs/ label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#tags GoogleNotebooksRuntime#tags}

---

##### `reset_virtual_machine_config` <a name="reset_virtual_machine_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.resetVirtualMachineConfig"></a>

```python
def reset_virtual_machine_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfig">virtual_machine_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfigInput">virtual_machine_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `virtual_machine_config`<sup>Required</sup> <a name="virtual_machine_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfig"></a>

```python
virtual_machine_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference</a>

---

##### `virtual_machine_config_input`<sup>Optional</sup> <a name="virtual_machine_config_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfigInput"></a>

```python
virtual_machine_config_input: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksRuntimeVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetCoreCount">reset_core_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_core_count` <a name="reset_core_count" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetCoreCount"></a>

```python
def reset_core_count() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCountInput">core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_count_input`<sup>Optional</sup> <a name="core_count_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCountInput"></a>

```python
core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resetTag">reset_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskName">reset_disk_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk_name` <a name="reset_disk_name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskName"></a>

```python
def reset_disk_name() -> None
```

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskNameInput">disk_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskName">disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_name_input`<sup>Optional</sup> <a name="disk_name_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskNameInput"></a>

```python
disk_name_input: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams">put_initialize_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInitializeParams">reset_initialize_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInterface">reset_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_initialize_params` <a name="put_initialize_params" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams"></a>

```python
def put_initialize_params(
  description: str = None,
  disk_name: str = None,
  disk_size_gb: typing.Union[int, float] = None,
  disk_type: str = None,
  labels: typing.Mapping[str] = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.description"></a>

- *Type:* str

Provide this property when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#description GoogleNotebooksRuntime#description}

---

###### `disk_name`<sup>Optional</sup> <a name="disk_name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.diskName"></a>

- *Type:* str

Specifies the disk name.

If not specified, the default is
to use the name of the instance. If the disk with the
instance name exists already in the given zone/region, a
new name will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#disk_name GoogleNotebooksRuntime#disk_name}

---

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.diskSizeGb"></a>

- *Type:* typing.Union[int, float]

Specifies the size of the disk in base-2 GB.

If not
specified, the disk will be the same size as the image
(usually 10GB). If specified, the size must be equal to
or larger than 10GB. Default 100 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#disk_size_gb GoogleNotebooksRuntime#disk_size_gb}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.diskType"></a>

- *Type:* str

The type of the boot disk attached to this runtime, defaults to standard persistent disk. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#disktype'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#disk_type GoogleNotebooksRuntime#disk_type}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this disk.

These can be later modified
by the disks.setLabels method. This field is only
applicable for persistent disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#labels GoogleNotebooksRuntime#labels}

---

##### `reset_initialize_params` <a name="reset_initialize_params" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInitializeParams"></a>

```python
def reset_initialize_params() -> None
```

##### `reset_interface` <a name="reset_interface" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInterface"></a>

```python
def reset_interface() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.autoDelete">auto_delete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.boot">boot</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.guestOsFeatures">guest_os_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.index">index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParams">initialize_params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.licenses">licenses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParamsInput">initialize_params_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interfaceInput">interface_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.autoDelete"></a>

```python
auto_delete: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.boot"></a>

```python
boot: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `guest_os_features`<sup>Required</sup> <a name="guest_os_features" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.guestOsFeatures"></a>

```python
guest_os_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initialize_params`<sup>Required</sup> <a name="initialize_params" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParams"></a>

```python
initialize_params: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.licenses"></a>

```python
licenses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `initialize_params_input`<sup>Optional</sup> <a name="initialize_params_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParamsInput"></a>

```python
initialize_params_input: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interfaceInput"></a>

```python
interface_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig">put_accelerator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages">put_container_images</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk">put_data_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetAcceleratorConfig">reset_accelerator_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetContainerImages">reset_container_images</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetInternalIpOnly">reset_internal_ip_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNicType">reset_nic_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetReservedIpRange">reset_reserved_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetSubnet">reset_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accelerator_config` <a name="put_accelerator_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig"></a>

```python
def put_accelerator_config(
  core_count: typing.Union[int, float] = None,
  type: str = None
) -> None
```

###### `core_count`<sup>Optional</sup> <a name="core_count" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig.parameter.coreCount"></a>

- *Type:* typing.Union[int, float]

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#core_count GoogleNotebooksRuntime#core_count}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig.parameter.type"></a>

- *Type:* str

Accelerator model. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#AcceleratorType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#type GoogleNotebooksRuntime#type}

---

##### `put_container_images` <a name="put_container_images" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages"></a>

```python
def put_container_images(
  value: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]

---

##### `put_data_disk` <a name="put_data_disk" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk"></a>

```python
def put_data_disk(
  initialize_params: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams = None,
  interface: str = None,
  mode: str = None,
  source: str = None,
  type: str = None
) -> None
```

###### `initialize_params`<sup>Optional</sup> <a name="initialize_params" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.initializeParams"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#initialize_params GoogleNotebooksRuntime#initialize_params}

---

###### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.interface"></a>

- *Type:* str

"Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI. Persistent
disks must always use SCSI and the request will fail if you attempt
to attach a persistent disk in any other format than SCSI. Local SSDs
can use either NVME or SCSI. For performance characteristics of SCSI
over NVMe, see Local SSD performance. Valid values: * NVME * SCSI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#interface GoogleNotebooksRuntime#interface}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.mode"></a>

- *Type:* str

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If not specified, the default is to attach
the disk in READ_WRITE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#mode GoogleNotebooksRuntime#mode}

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.source"></a>

- *Type:* str

Specifies a valid partial or full URL to an existing Persistent Disk resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#source GoogleNotebooksRuntime#source}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.type"></a>

- *Type:* str

Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#type GoogleNotebooksRuntime#type}

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig"></a>

```python
def put_encryption_config(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig.parameter.kmsKey"></a>

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks.

It has the following format:
'projects/{PROJECT_ID}/locations/{REGION}/keyRings/
{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#kms_key GoogleNotebooksRuntime#kms_key}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the boot integrity of
the instance. The attestation is performed against the
integrity policy baseline. This baseline is initially derived
from the implicitly trusted boot image when the instance is
created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#enable_integrity_monitoring GoogleNotebooksRuntime#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has Secure Boot enabled.Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#enable_secure_boot GoogleNotebooksRuntime#enable_secure_boot}

---

###### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig.parameter.enableVtpm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_notebooks_runtime#enable_vtpm GoogleNotebooksRuntime#enable_vtpm}

---

##### `reset_accelerator_config` <a name="reset_accelerator_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetAcceleratorConfig"></a>

```python
def reset_accelerator_config() -> None
```

##### `reset_container_images` <a name="reset_container_images" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetContainerImages"></a>

```python
def reset_container_images() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_internal_ip_only` <a name="reset_internal_ip_only" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetInternalIpOnly"></a>

```python
def reset_internal_ip_only() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_nic_type` <a name="reset_nic_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNicType"></a>

```python
def reset_nic_type() -> None
```

##### `reset_reserved_ip_range` <a name="reset_reserved_ip_range" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetReservedIpRange"></a>

```python
def reset_reserved_ip_range() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetSubnet"></a>

```python
def reset_subnet() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfig">accelerator_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImages">container_images</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDisk">data_disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.guestAttributes">guest_attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfigInput">accelerator_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImagesInput">container_images_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDiskInput">data_disk_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnlyInput">internal_ip_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicTypeInput">nic_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRangeInput">reserved_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnly">internal_ip_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicType">nic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRange">reserved_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_config`<sup>Required</sup> <a name="accelerator_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfig"></a>

```python
accelerator_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference</a>

---

##### `container_images`<sup>Required</sup> <a name="container_images" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImages"></a>

```python
container_images: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList</a>

---

##### `data_disk`<sup>Required</sup> <a name="data_disk" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDisk"></a>

```python
data_disk: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference</a>

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfig"></a>

```python
encryption_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference</a>

---

##### `guest_attributes`<sup>Required</sup> <a name="guest_attributes" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.guestAttributes"></a>

```python
guest_attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference</a>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `accelerator_config_input`<sup>Optional</sup> <a name="accelerator_config_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfigInput"></a>

```python
accelerator_config_input: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

---

##### `container_images_input`<sup>Optional</sup> <a name="container_images_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImagesInput"></a>

```python
container_images_input: typing.Union[IResolvable, typing.List[GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages</a>]]

---

##### `data_disk_input`<sup>Optional</sup> <a name="data_disk_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDiskInput"></a>

```python
data_disk_input: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfigInput"></a>

```python
encryption_config_input: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

---

##### `internal_ip_only_input`<sup>Optional</sup> <a name="internal_ip_only_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnlyInput"></a>

```python
internal_ip_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `nic_type_input`<sup>Optional</sup> <a name="nic_type_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicTypeInput"></a>

```python
nic_type_input: str
```

- *Type:* str

---

##### `reserved_ip_range_input`<sup>Optional</sup> <a name="reserved_ip_range_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRangeInput"></a>

```python
reserved_ip_range_input: str
```

- *Type:* str

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_ip_only`<sup>Required</sup> <a name="internal_ip_only" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnly"></a>

```python
internal_ip_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `nic_type`<sup>Required</sup> <a name="nic_type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

---

##### `reserved_ip_range`<sup>Required</sup> <a name="reserved_ip_range" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRange"></a>

```python
reserved_ip_range: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_notebooks_runtime

googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableVtpm">reset_enable_vtpm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```

##### `reset_enable_vtpm` <a name="reset_enable_vtpm" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```python
def reset_enable_vtpm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput">enable_vtpm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm_input`<sup>Optional</sup> <a name="enable_vtpm_input" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```python
enable_vtpm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

---



