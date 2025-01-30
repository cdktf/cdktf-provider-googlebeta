# `googleComputeMachineImage` Submodule <a name="`googleComputeMachineImage` Submodule" id="@cdktf/provider-google-beta.googleComputeMachineImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeMachineImage <a name="GoogleComputeMachineImage" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image google_compute_machine_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_machine_image

googleComputeMachineImage.GoogleComputeMachineImage(
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
  source_instance: str,
  description: str = None,
  guest_flush: typing.Union[bool, IResolvable] = None,
  id: str = None,
  machine_image_encryption_key: GoogleComputeMachineImageMachineImageEncryptionKey = None,
  project: str = None,
  timeouts: GoogleComputeMachineImageTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.sourceInstance">source_instance</a></code> | <code>str</code> | The source instance used to create the machine image. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.description">description</a></code> | <code>str</code> | A text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.guestFlush">guest_flush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#id GoogleComputeMachineImage#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.machineImageEncryptionKey">machine_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a></code> | machine_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#project GoogleComputeMachineImage#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#name GoogleComputeMachineImage#name}

---

##### `source_instance`<sup>Required</sup> <a name="source_instance" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.sourceInstance"></a>

- *Type:* str

The source instance used to create the machine image.

You can provide this as a partial or full URL to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#source_instance GoogleComputeMachineImage#source_instance}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.description"></a>

- *Type:* str

A text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#description GoogleComputeMachineImage#description}

---

##### `guest_flush`<sup>Optional</sup> <a name="guest_flush" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.guestFlush"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.

Currently only supported on Windows instances using the Volume Shadow Copy Service (VSS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#guest_flush GoogleComputeMachineImage#guest_flush}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#id GoogleComputeMachineImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `machine_image_encryption_key`<sup>Optional</sup> <a name="machine_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.machineImageEncryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a>

machine_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#machine_image_encryption_key GoogleComputeMachineImage#machine_image_encryption_key}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#project GoogleComputeMachineImage#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#timeouts GoogleComputeMachineImage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putMachineImageEncryptionKey">put_machine_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetGuestFlush">reset_guest_flush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetMachineImageEncryptionKey">reset_machine_image_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_machine_image_encryption_key` <a name="put_machine_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putMachineImageEncryptionKey"></a>

```python
def put_machine_image_encryption_key(
  kms_key_name: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putMachineImageEncryptionKey.parameter.kmsKeyName"></a>

- *Type:* str

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#kms_key_name GoogleComputeMachineImage#kms_key_name}

---

###### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putMachineImageEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#kms_key_service_account GoogleComputeMachineImage#kms_key_service_account}

---

###### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putMachineImageEncryptionKey.parameter.rawKey"></a>

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#raw_key GoogleComputeMachineImage#raw_key}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#create GoogleComputeMachineImage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#delete GoogleComputeMachineImage#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_guest_flush` <a name="reset_guest_flush" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetGuestFlush"></a>

```python
def reset_guest_flush() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_machine_image_encryption_key` <a name="reset_machine_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetMachineImageEncryptionKey"></a>

```python
def reset_machine_image_encryption_key() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeMachineImage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_machine_image

googleComputeMachineImage.GoogleComputeMachineImage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_machine_image

googleComputeMachineImage.GoogleComputeMachineImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_machine_image

googleComputeMachineImage.GoogleComputeMachineImage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_machine_image

googleComputeMachineImage.GoogleComputeMachineImage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeMachineImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeMachineImage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeMachineImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeMachineImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.machineImageEncryptionKey">machine_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference">GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.storageLocations">storage_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference">GoogleComputeMachineImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.guestFlushInput">guest_flush_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.machineImageEncryptionKeyInput">machine_image_encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.sourceInstanceInput">source_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.guestFlush">guest_flush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.sourceInstance">source_instance</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `machine_image_encryption_key`<sup>Required</sup> <a name="machine_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.machineImageEncryptionKey"></a>

```python
machine_image_encryption_key: GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference">GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `storage_locations`<sup>Required</sup> <a name="storage_locations" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.storageLocations"></a>

```python
storage_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.timeouts"></a>

```python
timeouts: GoogleComputeMachineImageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference">GoogleComputeMachineImageTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `guest_flush_input`<sup>Optional</sup> <a name="guest_flush_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.guestFlushInput"></a>

```python
guest_flush_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `machine_image_encryption_key_input`<sup>Optional</sup> <a name="machine_image_encryption_key_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.machineImageEncryptionKeyInput"></a>

```python
machine_image_encryption_key_input: GoogleComputeMachineImageMachineImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `source_instance_input`<sup>Optional</sup> <a name="source_instance_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.sourceInstanceInput"></a>

```python
source_instance_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeMachineImageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `guest_flush`<sup>Required</sup> <a name="guest_flush" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.guestFlush"></a>

```python
guest_flush: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `source_instance`<sup>Required</sup> <a name="source_instance" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.sourceInstance"></a>

```python
source_instance: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeMachineImageConfig <a name="GoogleComputeMachineImageConfig" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_machine_image

googleComputeMachineImage.GoogleComputeMachineImageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  source_instance: str,
  description: str = None,
  guest_flush: typing.Union[bool, IResolvable] = None,
  id: str = None,
  machine_image_encryption_key: GoogleComputeMachineImageMachineImageEncryptionKey = None,
  project: str = None,
  timeouts: GoogleComputeMachineImageTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.sourceInstance">source_instance</a></code> | <code>str</code> | The source instance used to create the machine image. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.description">description</a></code> | <code>str</code> | A text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.guestFlush">guest_flush</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#id GoogleComputeMachineImage#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.machineImageEncryptionKey">machine_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a></code> | machine_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#project GoogleComputeMachineImage#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#name GoogleComputeMachineImage#name}

---

##### `source_instance`<sup>Required</sup> <a name="source_instance" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.sourceInstance"></a>

```python
source_instance: str
```

- *Type:* str

The source instance used to create the machine image.

You can provide this as a partial or full URL to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#source_instance GoogleComputeMachineImage#source_instance}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#description GoogleComputeMachineImage#description}

---

##### `guest_flush`<sup>Optional</sup> <a name="guest_flush" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.guestFlush"></a>

```python
guest_flush: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specify this to create an application consistent machine image by informing the OS to prepare for the snapshot process.

Currently only supported on Windows instances using the Volume Shadow Copy Service (VSS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#guest_flush GoogleComputeMachineImage#guest_flush}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#id GoogleComputeMachineImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `machine_image_encryption_key`<sup>Optional</sup> <a name="machine_image_encryption_key" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.machineImageEncryptionKey"></a>

```python
machine_image_encryption_key: GoogleComputeMachineImageMachineImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a>

machine_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#machine_image_encryption_key GoogleComputeMachineImage#machine_image_encryption_key}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#project GoogleComputeMachineImage#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeMachineImageTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#timeouts GoogleComputeMachineImage#timeouts}

---

### GoogleComputeMachineImageMachineImageEncryptionKey <a name="GoogleComputeMachineImageMachineImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_machine_image

googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey(
  kms_key_name: str = None,
  kms_key_service_account: str = None,
  raw_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The name of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.rawKey">raw_key</a></code> | <code>str</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The name of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#kms_key_name GoogleComputeMachineImage#kms_key_name}

---

##### `kms_key_service_account`<sup>Optional</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account used for the encryption request for the given KMS key.

If absent, the Compute Engine Service Agent service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#kms_key_service_account GoogleComputeMachineImage#kms_key_service_account}

---

##### `raw_key`<sup>Optional</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#raw_key GoogleComputeMachineImage#raw_key}

---

### GoogleComputeMachineImageTimeouts <a name="GoogleComputeMachineImageTimeouts" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_machine_image

googleComputeMachineImage.GoogleComputeMachineImageTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#create GoogleComputeMachineImage#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#delete GoogleComputeMachineImage#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#create GoogleComputeMachineImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_machine_image#delete GoogleComputeMachineImage#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference <a name="GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_machine_image

googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">reset_kms_key_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetRawKey">reset_raw_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_kms_key_service_account` <a name="reset_kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```python
def reset_kms_key_service_account() -> None
```

##### `reset_raw_key` <a name="reset_raw_key" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.resetRawKey"></a>

```python
def reset_raw_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.rawKeyInput">raw_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.rawKey">raw_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `raw_key_input`<sup>Optional</sup> <a name="raw_key_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```python
raw_key_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `raw_key`<sup>Required</sup> <a name="raw_key" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.rawKey"></a>

```python
raw_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeMachineImageMachineImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageMachineImageEncryptionKey">GoogleComputeMachineImageMachineImageEncryptionKey</a>

---


### GoogleComputeMachineImageTimeoutsOutputReference <a name="GoogleComputeMachineImageTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_machine_image

googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeMachineImageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeMachineImage.GoogleComputeMachineImageTimeouts">GoogleComputeMachineImageTimeouts</a>]

---



