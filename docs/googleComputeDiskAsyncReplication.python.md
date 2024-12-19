# `googleComputeDiskAsyncReplication` Submodule <a name="`googleComputeDiskAsyncReplication` Submodule" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeDiskAsyncReplication <a name="GoogleComputeDiskAsyncReplication" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication google_compute_disk_async_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk_async_replication

googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  primary_disk: str,
  secondary_disk: GoogleComputeDiskAsyncReplicationSecondaryDisk,
  id: str = None,
  timeouts: GoogleComputeDiskAsyncReplicationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.primaryDisk">primary_disk</a></code> | <code>str</code> | Primary disk for asynchronous replication. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.secondaryDisk">secondary_disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a></code> | secondary_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#id GoogleComputeDiskAsyncReplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts">GoogleComputeDiskAsyncReplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `primary_disk`<sup>Required</sup> <a name="primary_disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.primaryDisk"></a>

- *Type:* str

Primary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#primary_disk GoogleComputeDiskAsyncReplication#primary_disk}

---

##### `secondary_disk`<sup>Required</sup> <a name="secondary_disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.secondaryDisk"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a>

secondary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#secondary_disk GoogleComputeDiskAsyncReplication#secondary_disk}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#id GoogleComputeDiskAsyncReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts">GoogleComputeDiskAsyncReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#timeouts GoogleComputeDiskAsyncReplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putSecondaryDisk">put_secondary_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_secondary_disk` <a name="put_secondary_disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putSecondaryDisk"></a>

```python
def put_secondary_disk(
  disk: str
) -> None
```

###### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putSecondaryDisk.parameter.disk"></a>

- *Type:* str

Secondary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#disk GoogleComputeDiskAsyncReplication#disk}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#create GoogleComputeDiskAsyncReplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#delete GoogleComputeDiskAsyncReplication#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeDiskAsyncReplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk_async_replication

googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk_async_replication

googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk_async_replication

googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk_async_replication

googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeDiskAsyncReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeDiskAsyncReplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeDiskAsyncReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeDiskAsyncReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.secondaryDisk">secondary_disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference">GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference">GoogleComputeDiskAsyncReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.primaryDiskInput">primary_disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.secondaryDiskInput">secondary_disk_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts">GoogleComputeDiskAsyncReplicationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.primaryDisk">primary_disk</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secondary_disk`<sup>Required</sup> <a name="secondary_disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.secondaryDisk"></a>

```python
secondary_disk: GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference">GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.timeouts"></a>

```python
timeouts: GoogleComputeDiskAsyncReplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference">GoogleComputeDiskAsyncReplicationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `primary_disk_input`<sup>Optional</sup> <a name="primary_disk_input" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.primaryDiskInput"></a>

```python
primary_disk_input: str
```

- *Type:* str

---

##### `secondary_disk_input`<sup>Optional</sup> <a name="secondary_disk_input" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.secondaryDiskInput"></a>

```python
secondary_disk_input: GoogleComputeDiskAsyncReplicationSecondaryDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeDiskAsyncReplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts">GoogleComputeDiskAsyncReplicationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `primary_disk`<sup>Required</sup> <a name="primary_disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.primaryDisk"></a>

```python
primary_disk: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeDiskAsyncReplicationConfig <a name="GoogleComputeDiskAsyncReplicationConfig" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk_async_replication

googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  primary_disk: str,
  secondary_disk: GoogleComputeDiskAsyncReplicationSecondaryDisk,
  id: str = None,
  timeouts: GoogleComputeDiskAsyncReplicationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.primaryDisk">primary_disk</a></code> | <code>str</code> | Primary disk for asynchronous replication. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.secondaryDisk">secondary_disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a></code> | secondary_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#id GoogleComputeDiskAsyncReplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts">GoogleComputeDiskAsyncReplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `primary_disk`<sup>Required</sup> <a name="primary_disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.primaryDisk"></a>

```python
primary_disk: str
```

- *Type:* str

Primary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#primary_disk GoogleComputeDiskAsyncReplication#primary_disk}

---

##### `secondary_disk`<sup>Required</sup> <a name="secondary_disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.secondaryDisk"></a>

```python
secondary_disk: GoogleComputeDiskAsyncReplicationSecondaryDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a>

secondary_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#secondary_disk GoogleComputeDiskAsyncReplication#secondary_disk}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#id GoogleComputeDiskAsyncReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeDiskAsyncReplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts">GoogleComputeDiskAsyncReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#timeouts GoogleComputeDiskAsyncReplication#timeouts}

---

### GoogleComputeDiskAsyncReplicationSecondaryDisk <a name="GoogleComputeDiskAsyncReplicationSecondaryDisk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk_async_replication

googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk(
  disk: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk.property.disk">disk</a></code> | <code>str</code> | Secondary disk for asynchronous replication. |

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk.property.disk"></a>

```python
disk: str
```

- *Type:* str

Secondary disk for asynchronous replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#disk GoogleComputeDiskAsyncReplication#disk}

---

### GoogleComputeDiskAsyncReplicationTimeouts <a name="GoogleComputeDiskAsyncReplicationTimeouts" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk_async_replication

googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#create GoogleComputeDiskAsyncReplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#delete GoogleComputeDiskAsyncReplication#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#create GoogleComputeDiskAsyncReplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_disk_async_replication#delete GoogleComputeDiskAsyncReplication#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference <a name="GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk_async_replication

googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.diskInput">disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.diskInput"></a>

```python
disk_input: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDiskOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeDiskAsyncReplicationSecondaryDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationSecondaryDisk">GoogleComputeDiskAsyncReplicationSecondaryDisk</a>

---


### GoogleComputeDiskAsyncReplicationTimeoutsOutputReference <a name="GoogleComputeDiskAsyncReplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_disk_async_replication

googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts">GoogleComputeDiskAsyncReplicationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeDiskAsyncReplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeDiskAsyncReplication.GoogleComputeDiskAsyncReplicationTimeouts">GoogleComputeDiskAsyncReplicationTimeouts</a>]

---



