# `googleStorageDefaultObjectAccessControl` Submodule <a name="`googleStorageDefaultObjectAccessControl` Submodule" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageDefaultObjectAccessControl <a name="GoogleStorageDefaultObjectAccessControl" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control google_storage_default_object_access_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_default_object_access_control

googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  entity: str,
  role: str,
  id: str = None,
  object: str = None,
  timeouts: GoogleStorageDefaultObjectAccessControlTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.entity">entity</a></code> | <code>str</code> | The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.role">role</a></code> | <code>str</code> | The access permission for the entity. Possible values: ["OWNER", "READER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#id GoogleStorageDefaultObjectAccessControl#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.object">object</a></code> | <code>str</code> | The name of the object, if applied to an object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.bucket"></a>

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#bucket GoogleStorageDefaultObjectAccessControl#bucket}

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.entity"></a>

- *Type:* str

The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#entity GoogleStorageDefaultObjectAccessControl#entity}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.role"></a>

- *Type:* str

The access permission for the entity. Possible values: ["OWNER", "READER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#role GoogleStorageDefaultObjectAccessControl#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#id GoogleStorageDefaultObjectAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.object"></a>

- *Type:* str

The name of the object, if applied to an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#object GoogleStorageDefaultObjectAccessControl#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#timeouts GoogleStorageDefaultObjectAccessControl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#create GoogleStorageDefaultObjectAccessControl#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#delete GoogleStorageDefaultObjectAccessControl#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#update GoogleStorageDefaultObjectAccessControl#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_object` <a name="reset_object" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleStorageDefaultObjectAccessControl resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_default_object_access_control

googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_default_object_access_control

googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_default_object_access_control

googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_default_object_access_control

googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleStorageDefaultObjectAccessControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleStorageDefaultObjectAccessControl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleStorageDefaultObjectAccessControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageDefaultObjectAccessControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.projectTeam">project_team</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList">GoogleStorageDefaultObjectAccessControlProjectTeamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference">GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entityInput">entity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entity">entity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_team`<sup>Required</sup> <a name="project_team" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.projectTeam"></a>

```python
project_team: GoogleStorageDefaultObjectAccessControlProjectTeamList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList">GoogleStorageDefaultObjectAccessControlProjectTeamList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.timeouts"></a>

```python
timeouts: GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference">GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `entity_input`<sup>Optional</sup> <a name="entity_input" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entityInput"></a>

```python
entity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleStorageDefaultObjectAccessControlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a>]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.entity"></a>

```python
entity: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageDefaultObjectAccessControlConfig <a name="GoogleStorageDefaultObjectAccessControlConfig" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_default_object_access_control

googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  entity: str,
  role: str,
  id: str = None,
  object: str = None,
  timeouts: GoogleStorageDefaultObjectAccessControlTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.bucket">bucket</a></code> | <code>str</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.entity">entity</a></code> | <code>str</code> | The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.role">role</a></code> | <code>str</code> | The access permission for the entity. Possible values: ["OWNER", "READER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#id GoogleStorageDefaultObjectAccessControl#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.object">object</a></code> | <code>str</code> | The name of the object, if applied to an object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#bucket GoogleStorageDefaultObjectAccessControl#bucket}

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.entity"></a>

```python
entity: str
```

- *Type:* str

The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#entity GoogleStorageDefaultObjectAccessControl#entity}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The access permission for the entity. Possible values: ["OWNER", "READER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#role GoogleStorageDefaultObjectAccessControl#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#id GoogleStorageDefaultObjectAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.object"></a>

```python
object: str
```

- *Type:* str

The name of the object, if applied to an object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#object GoogleStorageDefaultObjectAccessControl#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlConfig.property.timeouts"></a>

```python
timeouts: GoogleStorageDefaultObjectAccessControlTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#timeouts GoogleStorageDefaultObjectAccessControl#timeouts}

---

### GoogleStorageDefaultObjectAccessControlProjectTeam <a name="GoogleStorageDefaultObjectAccessControlProjectTeam" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeam.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_default_object_access_control

googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeam()
```


### GoogleStorageDefaultObjectAccessControlTimeouts <a name="GoogleStorageDefaultObjectAccessControlTimeouts" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_default_object_access_control

googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#create GoogleStorageDefaultObjectAccessControl#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#delete GoogleStorageDefaultObjectAccessControl#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#update GoogleStorageDefaultObjectAccessControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#create GoogleStorageDefaultObjectAccessControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#delete GoogleStorageDefaultObjectAccessControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_default_object_access_control#update GoogleStorageDefaultObjectAccessControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageDefaultObjectAccessControlProjectTeamList <a name="GoogleStorageDefaultObjectAccessControlProjectTeamList" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_default_object_access_control

googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference <a name="GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_default_object_access_control

googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.projectNumber">project_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.team">team</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeam">GoogleStorageDefaultObjectAccessControlProjectTeam</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_number`<sup>Required</sup> <a name="project_number" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.projectNumber"></a>

```python
project_number: str
```

- *Type:* str

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.team"></a>

```python
team: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeamOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageDefaultObjectAccessControlProjectTeam
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlProjectTeam">GoogleStorageDefaultObjectAccessControlProjectTeam</a>

---


### GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference <a name="GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_default_object_access_control

googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleStorageDefaultObjectAccessControlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageDefaultObjectAccessControl.GoogleStorageDefaultObjectAccessControlTimeouts">GoogleStorageDefaultObjectAccessControlTimeouts</a>]

---



