# `googleFirebaseExtensionsInstance` Submodule <a name="`googleFirebaseExtensionsInstance` Submodule" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseExtensionsInstance <a name="GoogleFirebaseExtensionsInstance" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance google_firebase_extensions_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: GoogleFirebaseExtensionsInstanceConfigA,
  instance_id: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseExtensionsInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The ID to use for the Extension Instance, which will become the final component of the instance's name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#id GoogleFirebaseExtensionsInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#project GoogleFirebaseExtensionsInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#config GoogleFirebaseExtensionsInstance#config}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.instanceId"></a>

- *Type:* str

The ID to use for the Extension Instance, which will become the final component of the instance's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#instance_id GoogleFirebaseExtensionsInstance#instance_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#id GoogleFirebaseExtensionsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#project GoogleFirebaseExtensionsInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#timeouts GoogleFirebaseExtensionsInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putConfig"></a>

```python
def put_config(
  extension_ref: str,
  params: typing.Mapping[str],
  allowed_event_types: typing.List[str] = None,
  eventarc_channel: str = None,
  extension_version: str = None,
  system_params: typing.Mapping[str] = None
) -> None
```

###### `extension_ref`<sup>Required</sup> <a name="extension_ref" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putConfig.parameter.extensionRef"></a>

- *Type:* str

The ref of the Extension from the Registry (e.g. publisher-id/awesome-extension).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#extension_ref GoogleFirebaseExtensionsInstance#extension_ref}

---

###### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putConfig.parameter.params"></a>

- *Type:* typing.Mapping[str]

Environment variables that may be configured for the Extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#params GoogleFirebaseExtensionsInstance#params}

---

###### `allowed_event_types`<sup>Optional</sup> <a name="allowed_event_types" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putConfig.parameter.allowedEventTypes"></a>

- *Type:* typing.List[str]

List of extension events selected by consumer that extension is allowed to emit, identified by their types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#allowed_event_types GoogleFirebaseExtensionsInstance#allowed_event_types}

---

###### `eventarc_channel`<sup>Optional</sup> <a name="eventarc_channel" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putConfig.parameter.eventarcChannel"></a>

- *Type:* str

Fully qualified Eventarc resource name that consumers should use for event triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#eventarc_channel GoogleFirebaseExtensionsInstance#eventarc_channel}

---

###### `extension_version`<sup>Optional</sup> <a name="extension_version" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putConfig.parameter.extensionVersion"></a>

- *Type:* str

The version of the Extension from the Registry (e.g. 1.0.3). If left blank, latest is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#extension_version GoogleFirebaseExtensionsInstance#extension_version}

---

###### `system_params`<sup>Optional</sup> <a name="system_params" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putConfig.parameter.systemParams"></a>

- *Type:* typing.Mapping[str]

Params whose values are only available at deployment time.

Unlike other params, these will not be set as environment variables on
functions. See a full list of system parameters at
https://firebase.google.com/docs/extensions/publishers/parameters#system_parameters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#system_params GoogleFirebaseExtensionsInstance#system_params}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#create GoogleFirebaseExtensionsInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#delete GoogleFirebaseExtensionsInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#update GoogleFirebaseExtensionsInstance#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleFirebaseExtensionsInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleFirebaseExtensionsInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirebaseExtensionsInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirebaseExtensionsInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseExtensionsInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference">GoogleFirebaseExtensionsInstanceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.errorStatus">error_status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList">GoogleFirebaseExtensionsInstanceErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lastOperationName">last_operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lastOperationType">last_operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.runtimeData">runtime_data</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList">GoogleFirebaseExtensionsInstanceRuntimeDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference">GoogleFirebaseExtensionsInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.config"></a>

```python
config: GoogleFirebaseExtensionsInstanceConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference">GoogleFirebaseExtensionsInstanceConfigAOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `error_status`<sup>Required</sup> <a name="error_status" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.errorStatus"></a>

```python
error_status: GoogleFirebaseExtensionsInstanceErrorStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList">GoogleFirebaseExtensionsInstanceErrorStatusList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `last_operation_name`<sup>Required</sup> <a name="last_operation_name" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lastOperationName"></a>

```python
last_operation_name: str
```

- *Type:* str

---

##### `last_operation_type`<sup>Required</sup> <a name="last_operation_type" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lastOperationType"></a>

```python
last_operation_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime_data`<sup>Required</sup> <a name="runtime_data" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.runtimeData"></a>

```python
runtime_data: GoogleFirebaseExtensionsInstanceRuntimeDataList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList">GoogleFirebaseExtensionsInstanceRuntimeDataList</a>

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.timeouts"></a>

```python
timeouts: GoogleFirebaseExtensionsInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference">GoogleFirebaseExtensionsInstanceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.configInput"></a>

```python
config_input: GoogleFirebaseExtensionsInstanceConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleFirebaseExtensionsInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseExtensionsInstanceConfig <a name="GoogleFirebaseExtensionsInstanceConfig" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: GoogleFirebaseExtensionsInstanceConfigA,
  instance_id: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseExtensionsInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The ID to use for the Extension Instance, which will become the final component of the instance's name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#id GoogleFirebaseExtensionsInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#project GoogleFirebaseExtensionsInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.config"></a>

```python
config: GoogleFirebaseExtensionsInstanceConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#config GoogleFirebaseExtensionsInstance#config}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID to use for the Extension Instance, which will become the final component of the instance's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#instance_id GoogleFirebaseExtensionsInstance#instance_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#id GoogleFirebaseExtensionsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#project GoogleFirebaseExtensionsInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseExtensionsInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#timeouts GoogleFirebaseExtensionsInstance#timeouts}

---

### GoogleFirebaseExtensionsInstanceConfigA <a name="GoogleFirebaseExtensionsInstanceConfigA" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA(
  extension_ref: str,
  params: typing.Mapping[str],
  allowed_event_types: typing.List[str] = None,
  eventarc_channel: str = None,
  extension_version: str = None,
  system_params: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.extensionRef">extension_ref</a></code> | <code>str</code> | The ref of the Extension from the Registry (e.g. publisher-id/awesome-extension). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.params">params</a></code> | <code>typing.Mapping[str]</code> | Environment variables that may be configured for the Extension. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.allowedEventTypes">allowed_event_types</a></code> | <code>typing.List[str]</code> | List of extension events selected by consumer that extension is allowed to emit, identified by their types. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.eventarcChannel">eventarc_channel</a></code> | <code>str</code> | Fully qualified Eventarc resource name that consumers should use for event triggers. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.extensionVersion">extension_version</a></code> | <code>str</code> | The version of the Extension from the Registry (e.g. 1.0.3). If left blank, latest is assumed. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.systemParams">system_params</a></code> | <code>typing.Mapping[str]</code> | Params whose values are only available at deployment time. |

---

##### `extension_ref`<sup>Required</sup> <a name="extension_ref" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.extensionRef"></a>

```python
extension_ref: str
```

- *Type:* str

The ref of the Extension from the Registry (e.g. publisher-id/awesome-extension).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#extension_ref GoogleFirebaseExtensionsInstance#extension_ref}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables that may be configured for the Extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#params GoogleFirebaseExtensionsInstance#params}

---

##### `allowed_event_types`<sup>Optional</sup> <a name="allowed_event_types" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.allowedEventTypes"></a>

```python
allowed_event_types: typing.List[str]
```

- *Type:* typing.List[str]

List of extension events selected by consumer that extension is allowed to emit, identified by their types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#allowed_event_types GoogleFirebaseExtensionsInstance#allowed_event_types}

---

##### `eventarc_channel`<sup>Optional</sup> <a name="eventarc_channel" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.eventarcChannel"></a>

```python
eventarc_channel: str
```

- *Type:* str

Fully qualified Eventarc resource name that consumers should use for event triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#eventarc_channel GoogleFirebaseExtensionsInstance#eventarc_channel}

---

##### `extension_version`<sup>Optional</sup> <a name="extension_version" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.extensionVersion"></a>

```python
extension_version: str
```

- *Type:* str

The version of the Extension from the Registry (e.g. 1.0.3). If left blank, latest is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#extension_version GoogleFirebaseExtensionsInstance#extension_version}

---

##### `system_params`<sup>Optional</sup> <a name="system_params" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.systemParams"></a>

```python
system_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Params whose values are only available at deployment time.

Unlike other params, these will not be set as environment variables on
functions. See a full list of system parameters at
https://firebase.google.com/docs/extensions/publishers/parameters#system_parameters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#system_params GoogleFirebaseExtensionsInstance#system_params}

---

### GoogleFirebaseExtensionsInstanceErrorStatus <a name="GoogleFirebaseExtensionsInstanceErrorStatus" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatus()
```


### GoogleFirebaseExtensionsInstanceRuntimeData <a name="GoogleFirebaseExtensionsInstanceRuntimeData" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeData.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeData()
```


### GoogleFirebaseExtensionsInstanceRuntimeDataFatalError <a name="GoogleFirebaseExtensionsInstanceRuntimeDataFatalError" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalError.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalError()
```


### GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState <a name="GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState()
```


### GoogleFirebaseExtensionsInstanceTimeouts <a name="GoogleFirebaseExtensionsInstanceTimeouts" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#create GoogleFirebaseExtensionsInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#delete GoogleFirebaseExtensionsInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#update GoogleFirebaseExtensionsInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#create GoogleFirebaseExtensionsInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#delete GoogleFirebaseExtensionsInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_extensions_instance#update GoogleFirebaseExtensionsInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseExtensionsInstanceConfigAOutputReference <a name="GoogleFirebaseExtensionsInstanceConfigAOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetAllowedEventTypes">reset_allowed_event_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetEventarcChannel">reset_eventarc_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetExtensionVersion">reset_extension_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetSystemParams">reset_system_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_event_types` <a name="reset_allowed_event_types" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetAllowedEventTypes"></a>

```python
def reset_allowed_event_types() -> None
```

##### `reset_eventarc_channel` <a name="reset_eventarc_channel" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetEventarcChannel"></a>

```python
def reset_eventarc_channel() -> None
```

##### `reset_extension_version` <a name="reset_extension_version" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetExtensionVersion"></a>

```python
def reset_extension_version() -> None
```

##### `reset_system_params` <a name="reset_system_params" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetSystemParams"></a>

```python
def reset_system_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.populatedPostinstallContent">populated_postinstall_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.allowedEventTypesInput">allowed_event_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.eventarcChannelInput">eventarc_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionRefInput">extension_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionVersionInput">extension_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.paramsInput">params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.systemParamsInput">system_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.allowedEventTypes">allowed_event_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.eventarcChannel">eventarc_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionRef">extension_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionVersion">extension_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.params">params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.systemParams">system_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `populated_postinstall_content`<sup>Required</sup> <a name="populated_postinstall_content" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.populatedPostinstallContent"></a>

```python
populated_postinstall_content: str
```

- *Type:* str

---

##### `allowed_event_types_input`<sup>Optional</sup> <a name="allowed_event_types_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.allowedEventTypesInput"></a>

```python
allowed_event_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `eventarc_channel_input`<sup>Optional</sup> <a name="eventarc_channel_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.eventarcChannelInput"></a>

```python
eventarc_channel_input: str
```

- *Type:* str

---

##### `extension_ref_input`<sup>Optional</sup> <a name="extension_ref_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionRefInput"></a>

```python
extension_ref_input: str
```

- *Type:* str

---

##### `extension_version_input`<sup>Optional</sup> <a name="extension_version_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionVersionInput"></a>

```python
extension_version_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.paramsInput"></a>

```python
params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `system_params_input`<sup>Optional</sup> <a name="system_params_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.systemParamsInput"></a>

```python
system_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_event_types`<sup>Required</sup> <a name="allowed_event_types" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.allowedEventTypes"></a>

```python
allowed_event_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `eventarc_channel`<sup>Required</sup> <a name="eventarc_channel" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.eventarcChannel"></a>

```python
eventarc_channel: str
```

- *Type:* str

---

##### `extension_ref`<sup>Required</sup> <a name="extension_ref" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionRef"></a>

```python
extension_ref: str
```

- *Type:* str

---

##### `extension_version`<sup>Required</sup> <a name="extension_version" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionVersion"></a>

```python
extension_version: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `system_params`<sup>Required</sup> <a name="system_params" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.systemParams"></a>

```python
system_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseExtensionsInstanceConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a>

---


### GoogleFirebaseExtensionsInstanceErrorStatusList <a name="GoogleFirebaseExtensionsInstanceErrorStatusList" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseExtensionsInstanceErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseExtensionsInstanceErrorStatusOutputReference <a name="GoogleFirebaseExtensionsInstanceErrorStatusOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatus">GoogleFirebaseExtensionsInstanceErrorStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseExtensionsInstanceErrorStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatus">GoogleFirebaseExtensionsInstanceErrorStatus</a>

---


### GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList <a name="GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference <a name="GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalError">GoogleFirebaseExtensionsInstanceRuntimeDataFatalError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseExtensionsInstanceRuntimeDataFatalError
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalError">GoogleFirebaseExtensionsInstanceRuntimeDataFatalError</a>

---


### GoogleFirebaseExtensionsInstanceRuntimeDataList <a name="GoogleFirebaseExtensionsInstanceRuntimeDataList" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference <a name="GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.fatalError">fatal_error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList">GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.processingState">processing_state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList">GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.stateUpdateTime">state_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeData">GoogleFirebaseExtensionsInstanceRuntimeData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fatal_error`<sup>Required</sup> <a name="fatal_error" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.fatalError"></a>

```python
fatal_error: GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList">GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList</a>

---

##### `processing_state`<sup>Required</sup> <a name="processing_state" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.processingState"></a>

```python
processing_state: GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList">GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList</a>

---

##### `state_update_time`<sup>Required</sup> <a name="state_update_time" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.stateUpdateTime"></a>

```python
state_update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseExtensionsInstanceRuntimeData
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeData">GoogleFirebaseExtensionsInstanceRuntimeData</a>

---


### GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList <a name="GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference <a name="GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.detailMessage">detail_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState">GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detail_message`<sup>Required</sup> <a name="detail_message" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.detailMessage"></a>

```python
detail_message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState">GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState</a>

---


### GoogleFirebaseExtensionsInstanceTimeoutsOutputReference <a name="GoogleFirebaseExtensionsInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_extensions_instance

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleFirebaseExtensionsInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a>]

---



