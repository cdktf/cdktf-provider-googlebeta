# `googleComputeInstanceGroupNamedPort` Submodule <a name="`googleComputeInstanceGroupNamedPort` Submodule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceGroupNamedPortA <a name="GoogleComputeInstanceGroupNamedPortA" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port google_compute_instance_group_named_port}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_named_port

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  name: str,
  port: typing.Union[int, float],
  id: str = None,
  project: str = None,
  timeouts: GoogleComputeInstanceGroupNamedPortTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.group">group</a></code> | <code>str</code> | The name of the instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for this named port. The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number, which can be a value between 1 and 65535. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#id GoogleComputeInstanceGroupNamedPortA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#project GoogleComputeInstanceGroupNamedPortA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone of the instance group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.group"></a>

- *Type:* str

The name of the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#group GoogleComputeInstanceGroupNamedPortA#group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.name"></a>

- *Type:* str

The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#name GoogleComputeInstanceGroupNamedPortA#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port number, which can be a value between 1 and 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#port GoogleComputeInstanceGroupNamedPortA#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#id GoogleComputeInstanceGroupNamedPortA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#project GoogleComputeInstanceGroupNamedPortA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#timeouts GoogleComputeInstanceGroupNamedPortA#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.Initializer.parameter.zone"></a>

- *Type:* str

The zone of the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#zone GoogleComputeInstanceGroupNamedPortA#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#create GoogleComputeInstanceGroupNamedPortA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#delete GoogleComputeInstanceGroupNamedPortA#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeInstanceGroupNamedPortA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_named_port

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_named_port

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_named_port

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_named_port

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeInstanceGroupNamedPortA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeInstanceGroupNamedPortA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeInstanceGroupNamedPortA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceGroupNamedPortA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference">GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.timeouts"></a>

```python
timeouts: GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference">GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference</a>

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeInstanceGroupNamedPortTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceGroupNamedPortAConfig <a name="GoogleComputeInstanceGroupNamedPortAConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_named_port

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  group: str,
  name: str,
  port: typing.Union[int, float],
  id: str = None,
  project: str = None,
  timeouts: GoogleComputeInstanceGroupNamedPortTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.group">group</a></code> | <code>str</code> | The name of the instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.name">name</a></code> | <code>str</code> | The name for this named port. The name must be 1-63 characters long, and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number, which can be a value between 1 and 65535. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#id GoogleComputeInstanceGroupNamedPortA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#project GoogleComputeInstanceGroupNamedPortA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.zone">zone</a></code> | <code>str</code> | The zone of the instance group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The name of the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#group GoogleComputeInstanceGroupNamedPortA#group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#name GoogleComputeInstanceGroupNamedPortA#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number, which can be a value between 1 and 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#port GoogleComputeInstanceGroupNamedPortA#port}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#id GoogleComputeInstanceGroupNamedPortA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#project GoogleComputeInstanceGroupNamedPortA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeInstanceGroupNamedPortTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#timeouts GoogleComputeInstanceGroupNamedPortA#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortAConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone of the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#zone GoogleComputeInstanceGroupNamedPortA#zone}

---

### GoogleComputeInstanceGroupNamedPortTimeouts <a name="GoogleComputeInstanceGroupNamedPortTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_named_port

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#create GoogleComputeInstanceGroupNamedPortA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#delete GoogleComputeInstanceGroupNamedPortA#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#create GoogleComputeInstanceGroupNamedPortA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_instance_group_named_port#delete GoogleComputeInstanceGroupNamedPortA#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference <a name="GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_instance_group_named_port

googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInstanceGroupNamedPortTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupNamedPort.GoogleComputeInstanceGroupNamedPortTimeouts">GoogleComputeInstanceGroupNamedPortTimeouts</a>]

---



