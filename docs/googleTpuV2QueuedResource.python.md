# `googleTpuV2QueuedResource` Submodule <a name="`googleTpuV2QueuedResource` Submodule" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleTpuV2QueuedResource <a name="GoogleTpuV2QueuedResource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource google_tpu_v2_queued_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResource(
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
  id: str = None,
  project: str = None,
  timeouts: GoogleTpuV2QueuedResourceTimeouts = None,
  tpu: GoogleTpuV2QueuedResourceTpu = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.name">name</a></code> | <code>str</code> | The immutable name of the Queued Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#id GoogleTpuV2QueuedResource#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#project GoogleTpuV2QueuedResource#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.tpu">tpu</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a></code> | tpu block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The GCP location for the Queued Resource. If it is not provided, the provider zone is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.name"></a>

- *Type:* str

The immutable name of the Queued Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#name GoogleTpuV2QueuedResource#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#id GoogleTpuV2QueuedResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#project GoogleTpuV2QueuedResource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#timeouts GoogleTpuV2QueuedResource#timeouts}

---

##### `tpu`<sup>Optional</sup> <a name="tpu" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.tpu"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a>

tpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#tpu GoogleTpuV2QueuedResource#tpu}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.Initializer.parameter.zone"></a>

- *Type:* str

The GCP location for the Queued Resource. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#zone GoogleTpuV2QueuedResource#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTpu">put_tpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetTpu">reset_tpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#create GoogleTpuV2QueuedResource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#delete GoogleTpuV2QueuedResource#delete}.

---

##### `put_tpu` <a name="put_tpu" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTpu"></a>

```python
def put_tpu(
  node_spec: typing.Union[IResolvable, typing.List[GoogleTpuV2QueuedResourceTpuNodeSpec]] = None
) -> None
```

###### `node_spec`<sup>Optional</sup> <a name="node_spec" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.putTpu.parameter.nodeSpec"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>]]

node_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#node_spec GoogleTpuV2QueuedResource#node_spec}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tpu` <a name="reset_tpu" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetTpu"></a>

```python
def reset_tpu() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleTpuV2QueuedResource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleTpuV2QueuedResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleTpuV2QueuedResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleTpuV2QueuedResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleTpuV2QueuedResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference">GoogleTpuV2QueuedResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tpu">tpu</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference">GoogleTpuV2QueuedResourceTpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tpuInput">tpu_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.timeouts"></a>

```python
timeouts: GoogleTpuV2QueuedResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference">GoogleTpuV2QueuedResourceTimeoutsOutputReference</a>

---

##### `tpu`<sup>Required</sup> <a name="tpu" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tpu"></a>

```python
tpu: GoogleTpuV2QueuedResourceTpuOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference">GoogleTpuV2QueuedResourceTpuOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleTpuV2QueuedResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a>]

---

##### `tpu_input`<sup>Optional</sup> <a name="tpu_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tpuInput"></a>

```python
tpu_input: GoogleTpuV2QueuedResourceTpu
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a>

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleTpuV2QueuedResourceConfig <a name="GoogleTpuV2QueuedResourceConfig" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleTpuV2QueuedResourceTimeouts = None,
  tpu: GoogleTpuV2QueuedResourceTpu = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.name">name</a></code> | <code>str</code> | The immutable name of the Queued Resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#id GoogleTpuV2QueuedResource#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#project GoogleTpuV2QueuedResource#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.tpu">tpu</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a></code> | tpu block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.zone">zone</a></code> | <code>str</code> | The GCP location for the Queued Resource. If it is not provided, the provider zone is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The immutable name of the Queued Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#name GoogleTpuV2QueuedResource#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#id GoogleTpuV2QueuedResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#project GoogleTpuV2QueuedResource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.timeouts"></a>

```python
timeouts: GoogleTpuV2QueuedResourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#timeouts GoogleTpuV2QueuedResource#timeouts}

---

##### `tpu`<sup>Optional</sup> <a name="tpu" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.tpu"></a>

```python
tpu: GoogleTpuV2QueuedResourceTpu
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a>

tpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#tpu GoogleTpuV2QueuedResource#tpu}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The GCP location for the Queued Resource. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#zone GoogleTpuV2QueuedResource#zone}

---

### GoogleTpuV2QueuedResourceTimeouts <a name="GoogleTpuV2QueuedResourceTimeouts" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#create GoogleTpuV2QueuedResource#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#delete GoogleTpuV2QueuedResource#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#create GoogleTpuV2QueuedResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#delete GoogleTpuV2QueuedResource#delete}.

---

### GoogleTpuV2QueuedResourceTpu <a name="GoogleTpuV2QueuedResourceTpu" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu(
  node_spec: typing.Union[IResolvable, typing.List[GoogleTpuV2QueuedResourceTpuNodeSpec]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu.property.nodeSpec">node_spec</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>]]</code> | node_spec block. |

---

##### `node_spec`<sup>Optional</sup> <a name="node_spec" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu.property.nodeSpec"></a>

```python
node_spec: typing.Union[IResolvable, typing.List[GoogleTpuV2QueuedResourceTpuNodeSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>]]

node_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#node_spec GoogleTpuV2QueuedResource#node_spec}

---

### GoogleTpuV2QueuedResourceTpuNodeSpec <a name="GoogleTpuV2QueuedResourceTpuNodeSpec" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec(
  node_attribute: GoogleTpuV2QueuedResourceTpuNodeSpecNode,
  parent: str,
  node_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.nodeAttribute">node_attribute</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a></code> | node block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.parent">parent</a></code> | <code>str</code> | The parent resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.nodeId">node_id</a></code> | <code>str</code> | Unqualified node identifier used to identify the node in the project once provisioned. |

---

##### `node_attribute`<sup>Required</sup> <a name="node_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.nodeAttribute"></a>

```python
node_attribute: GoogleTpuV2QueuedResourceTpuNodeSpecNode
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a>

node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#node GoogleTpuV2QueuedResource#node}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#parent GoogleTpuV2QueuedResource#parent}

---

##### `node_id`<sup>Optional</sup> <a name="node_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

Unqualified node identifier used to identify the node in the project once provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#node_id GoogleTpuV2QueuedResource#node_id}

---

### GoogleTpuV2QueuedResourceTpuNodeSpecNode <a name="GoogleTpuV2QueuedResourceTpuNodeSpecNode" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode(
  runtime_version: str,
  accelerator_type: str = None,
  description: str = None,
  network_config: GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | Runtime version for the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | TPU accelerator type for the TPU. If not specified, this defaults to 'v2-8'. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.description">description</a></code> | <code>str</code> | Text description of the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig">GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig</a></code> | network_config block. |

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

Runtime version for the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#runtime_version GoogleTpuV2QueuedResource#runtime_version}

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

TPU accelerator type for the TPU. If not specified, this defaults to 'v2-8'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#accelerator_type GoogleTpuV2QueuedResource#accelerator_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.description"></a>

```python
description: str
```

- *Type:* str

Text description of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#description GoogleTpuV2QueuedResource#description}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode.property.networkConfig"></a>

```python
network_config: GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig">GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#network_config GoogleTpuV2QueuedResource#network_config}

---

### GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig <a name="GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig(
  can_ip_forward: typing.Union[bool, IResolvable] = None,
  enable_external_ips: typing.Union[bool, IResolvable] = None,
  network: str = None,
  queue_count: typing.Union[int, float] = None,
  subnetwork: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig.property.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows the TPU node to send and receive packets with non-matching destination or source IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig.property.enableExternalIps">enable_external_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates that external IP addresses would be associated with the TPU workers. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig.property.network">network</a></code> | <code>str</code> | The name of the network for the TPU node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | Specifies networking queue count for TPU VM instance's network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork for the TPU node. |

---

##### `can_ip_forward`<sup>Optional</sup> <a name="can_ip_forward" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig.property.canIpForward"></a>

```python
can_ip_forward: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows the TPU node to send and receive packets with non-matching destination or source IPs.

This is required if you plan to use the TPU workers to forward routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#can_ip_forward GoogleTpuV2QueuedResource#can_ip_forward}

---

##### `enable_external_ips`<sup>Optional</sup> <a name="enable_external_ips" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig.property.enableExternalIps"></a>

```python
enable_external_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates that external IP addresses would be associated with the TPU workers.

If set to
false, the specified subnetwork or network should have Private Google Access enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#enable_external_ips GoogleTpuV2QueuedResource#enable_external_ips}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the network for the TPU node.

It must be a preexisting Google Compute Engine
network. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#network GoogleTpuV2QueuedResource#network}

---

##### `queue_count`<sup>Optional</sup> <a name="queue_count" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies networking queue count for TPU VM instance's network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#queue_count GoogleTpuV2QueuedResource#queue_count}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The name of the subnetwork for the TPU node.

It must be a preexisting Google Compute
Engine subnetwork. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#subnetwork GoogleTpuV2QueuedResource#subnetwork}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleTpuV2QueuedResourceTimeoutsOutputReference <a name="GoogleTpuV2QueuedResourceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTpuV2QueuedResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTimeouts">GoogleTpuV2QueuedResourceTimeouts</a>]

---


### GoogleTpuV2QueuedResourceTpuNodeSpecList <a name="GoogleTpuV2QueuedResourceTpuNodeSpecList" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleTpuV2QueuedResourceTpuNodeSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>]]

---


### GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference <a name="GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resetCanIpForward">reset_can_ip_forward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resetEnableExternalIps">reset_enable_external_ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resetQueueCount">reset_queue_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_can_ip_forward` <a name="reset_can_ip_forward" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resetCanIpForward"></a>

```python
def reset_can_ip_forward() -> None
```

##### `reset_enable_external_ips` <a name="reset_enable_external_ips" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resetEnableExternalIps"></a>

```python
def reset_enable_external_ips() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_queue_count` <a name="reset_queue_count" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resetQueueCount"></a>

```python
def reset_queue_count() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.canIpForwardInput">can_ip_forward_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.enableExternalIpsInput">enable_external_ips_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.queueCountInput">queue_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.canIpForward">can_ip_forward</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.enableExternalIps">enable_external_ips</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig">GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `can_ip_forward_input`<sup>Optional</sup> <a name="can_ip_forward_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.canIpForwardInput"></a>

```python
can_ip_forward_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_external_ips_input`<sup>Optional</sup> <a name="enable_external_ips_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.enableExternalIpsInput"></a>

```python
enable_external_ips_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `queue_count_input`<sup>Optional</sup> <a name="queue_count_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.queueCountInput"></a>

```python
queue_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `can_ip_forward`<sup>Required</sup> <a name="can_ip_forward" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.canIpForward"></a>

```python
can_ip_forward: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_external_ips`<sup>Required</sup> <a name="enable_external_ips" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.enableExternalIps"></a>

```python
enable_external_ips: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `queue_count`<sup>Required</sup> <a name="queue_count" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig">GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig</a>

---


### GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference <a name="GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resetNetworkConfig">reset_network_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.putNetworkConfig"></a>

```python
def put_network_config(
  can_ip_forward: typing.Union[bool, IResolvable] = None,
  enable_external_ips: typing.Union[bool, IResolvable] = None,
  network: str = None,
  queue_count: typing.Union[int, float] = None,
  subnetwork: str = None
) -> None
```

###### `can_ip_forward`<sup>Optional</sup> <a name="can_ip_forward" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.putNetworkConfig.parameter.canIpForward"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows the TPU node to send and receive packets with non-matching destination or source IPs.

This is required if you plan to use the TPU workers to forward routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#can_ip_forward GoogleTpuV2QueuedResource#can_ip_forward}

---

###### `enable_external_ips`<sup>Optional</sup> <a name="enable_external_ips" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.putNetworkConfig.parameter.enableExternalIps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates that external IP addresses would be associated with the TPU workers.

If set to
false, the specified subnetwork or network should have Private Google Access enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#enable_external_ips GoogleTpuV2QueuedResource#enable_external_ips}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.putNetworkConfig.parameter.network"></a>

- *Type:* str

The name of the network for the TPU node.

It must be a preexisting Google Compute Engine
network. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#network GoogleTpuV2QueuedResource#network}

---

###### `queue_count`<sup>Optional</sup> <a name="queue_count" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.putNetworkConfig.parameter.queueCount"></a>

- *Type:* typing.Union[int, float]

Specifies networking queue count for TPU VM instance's network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#queue_count GoogleTpuV2QueuedResource#queue_count}

---

###### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.putNetworkConfig.parameter.subnetwork"></a>

- *Type:* str

The name of the subnetwork for the TPU node.

It must be a preexisting Google Compute
Engine subnetwork. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#subnetwork GoogleTpuV2QueuedResource#subnetwork}

---

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference">GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig">GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.networkConfig"></a>

```python
network_config: GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference">GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfigOutputReference</a>

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.networkConfigInput"></a>

```python
network_config_input: GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig">GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig</a>

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTpuV2QueuedResourceTpuNodeSpecNode
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a>

---


### GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference <a name="GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.putNodeAttribute">put_node_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.resetNodeId">reset_node_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_node_attribute` <a name="put_node_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.putNodeAttribute"></a>

```python
def put_node_attribute(
  runtime_version: str,
  accelerator_type: str = None,
  description: str = None,
  network_config: GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig = None
) -> None
```

###### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.putNodeAttribute.parameter.runtimeVersion"></a>

- *Type:* str

Runtime version for the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#runtime_version GoogleTpuV2QueuedResource#runtime_version}

---

###### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.putNodeAttribute.parameter.acceleratorType"></a>

- *Type:* str

TPU accelerator type for the TPU. If not specified, this defaults to 'v2-8'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#accelerator_type GoogleTpuV2QueuedResource#accelerator_type}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.putNodeAttribute.parameter.description"></a>

- *Type:* str

Text description of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#description GoogleTpuV2QueuedResource#description}

---

###### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.putNodeAttribute.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig">GoogleTpuV2QueuedResourceTpuNodeSpecNodeNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_tpu_v2_queued_resource#network_config GoogleTpuV2QueuedResource#network_config}

---

##### `reset_node_id` <a name="reset_node_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.resetNodeId"></a>

```python
def reset_node_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeAttribute">node_attribute</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference">GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeAttributeInput">node_attribute_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeIdInput">node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_attribute`<sup>Required</sup> <a name="node_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeAttribute"></a>

```python
node_attribute: GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference">GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference</a>

---

##### `node_attribute_input`<sup>Optional</sup> <a name="node_attribute_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeAttributeInput"></a>

```python
node_attribute_input: GoogleTpuV2QueuedResourceTpuNodeSpecNode
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecNode">GoogleTpuV2QueuedResourceTpuNodeSpecNode</a>

---

##### `node_id_input`<sup>Optional</sup> <a name="node_id_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeIdInput"></a>

```python
node_id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleTpuV2QueuedResourceTpuNodeSpec]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>]

---


### GoogleTpuV2QueuedResourceTpuOutputReference <a name="GoogleTpuV2QueuedResourceTpuOutputReference" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tpu_v2_queued_resource

googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.putNodeSpec">put_node_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.resetNodeSpec">reset_node_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_node_spec` <a name="put_node_spec" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.putNodeSpec"></a>

```python
def put_node_spec(
  value: typing.Union[IResolvable, typing.List[GoogleTpuV2QueuedResourceTpuNodeSpec]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.putNodeSpec.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>]]

---

##### `reset_node_spec` <a name="reset_node_spec" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.resetNodeSpec"></a>

```python
def reset_node_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.nodeSpec">node_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList">GoogleTpuV2QueuedResourceTpuNodeSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.nodeSpecInput">node_spec_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_spec`<sup>Required</sup> <a name="node_spec" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.nodeSpec"></a>

```python
node_spec: GoogleTpuV2QueuedResourceTpuNodeSpecList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpecList">GoogleTpuV2QueuedResourceTpuNodeSpecList</a>

---

##### `node_spec_input`<sup>Optional</sup> <a name="node_spec_input" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.nodeSpecInput"></a>

```python
node_spec_input: typing.Union[IResolvable, typing.List[GoogleTpuV2QueuedResourceTpuNodeSpec]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuNodeSpec">GoogleTpuV2QueuedResourceTpuNodeSpec</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpuOutputReference.property.internalValue"></a>

```python
internal_value: GoogleTpuV2QueuedResourceTpu
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2QueuedResource.GoogleTpuV2QueuedResourceTpu">GoogleTpuV2QueuedResourceTpu</a>

---



