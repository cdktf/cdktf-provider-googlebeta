# `googleMemorystoreInstanceDesiredUserCreatedEndpoints` Submodule <a name="`googleMemorystoreInstanceDesiredUserCreatedEndpoints` Submodule" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMemorystoreInstanceDesiredUserCreatedEndpoints <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints google_memorystore_instance_desired_user_created_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints(
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
  region: str,
  desired_user_created_endpoints: typing.Union[IResolvable, typing.List[GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints]] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.region">region</a></code> | <code>str</code> | The name of the region of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.desiredUserCreatedEndpoints">desired_user_created_endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>]]</code> | desired_user_created_endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.name"></a>

- *Type:* str

The name of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#name GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.region"></a>

- *Type:* str

The name of the region of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#region GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#region}

---

##### `desired_user_created_endpoints`<sup>Optional</sup> <a name="desired_user_created_endpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.desiredUserCreatedEndpoints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>]]

desired_user_created_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#desired_user_created_endpoints GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#desired_user_created_endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#timeouts GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints">put_desired_user_created_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetDesiredUserCreatedEndpoints">reset_desired_user_created_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_desired_user_created_endpoints` <a name="put_desired_user_created_endpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints"></a>

```python
def put_desired_user_created_endpoints(
  value: typing.Union[IResolvable, typing.List[GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#create GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#delete GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#update GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#update}.

---

##### `reset_desired_user_created_endpoints` <a name="reset_desired_user_created_endpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetDesiredUserCreatedEndpoints"></a>

```python
def reset_desired_user_created_endpoints() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleMemorystoreInstanceDesiredUserCreatedEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleMemorystoreInstanceDesiredUserCreatedEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMemorystoreInstanceDesiredUserCreatedEndpoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMemorystoreInstanceDesiredUserCreatedEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMemorystoreInstanceDesiredUserCreatedEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpoints">desired_user_created_endpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpointsInput">desired_user_created_endpoints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `desired_user_created_endpoints`<sup>Required</sup> <a name="desired_user_created_endpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpoints"></a>

```python
desired_user_created_endpoints: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeouts"></a>

```python
timeouts: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference</a>

---

##### `desired_user_created_endpoints_input`<sup>Optional</sup> <a name="desired_user_created_endpoints_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpointsInput"></a>

```python
desired_user_created_endpoints_input: typing.Union[IResolvable, typing.List[GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  desired_user_created_endpoints: typing.Union[IResolvable, typing.List[GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints]] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.name">name</a></code> | <code>str</code> | The name of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.region">region</a></code> | <code>str</code> | The name of the region of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.desiredUserCreatedEndpoints">desired_user_created_endpoints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>]]</code> | desired_user_created_endpoints block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#name GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The name of the region of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#region GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#region}

---

##### `desired_user_created_endpoints`<sup>Optional</sup> <a name="desired_user_created_endpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.desiredUserCreatedEndpoints"></a>

```python
desired_user_created_endpoints: typing.Union[IResolvable, typing.List[GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>]]

desired_user_created_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#desired_user_created_endpoints GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#desired_user_created_endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.timeouts"></a>

```python
timeouts: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#timeouts GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#timeouts}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints(
  connections: typing.Union[IResolvable, typing.List[GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.property.connections">connections</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>]]</code> | connections block. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.property.connections"></a>

```python
connections: typing.Union[IResolvable, typing.List[GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>]]

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#connections GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#connections}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections(
  psc_connection: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.property.pscConnection">psc_connection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | psc_connection block. |

---

##### `psc_connection`<sup>Optional</sup> <a name="psc_connection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.property.pscConnection"></a>

```python
psc_connection: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

psc_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#psc_connection GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#psc_connection}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection(
  forwarding_rule: str,
  ip_address: str,
  network: str,
  psc_connection_id: str,
  service_attachment: str,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.ipAddress">ip_address</a></code> | <code>str</code> | The IP allocated on the consumer network for the PSC forwarding rule. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.network">network</a></code> | <code>str</code> | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | The PSC connection id of the forwarding rule connected to the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.projectId">project_id</a></code> | <code>str</code> | The consumer project_id where the forwarding rule is created from. |

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#forwarding_rule GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#forwarding_rule}

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#ip_address GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#ip_address}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.network"></a>

```python
network: str
```

- *Type:* str

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#network GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#network}

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#psc_connection_id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#psc_connection_id}

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#service_attachment GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#service_attachment}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project_id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project_id}

---

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#create GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#delete GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#update GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#create GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#delete GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#update GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>]]

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection">put_psc_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resetPscConnection">reset_psc_connection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_psc_connection` <a name="put_psc_connection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection"></a>

```python
def put_psc_connection(
  forwarding_rule: str,
  ip_address: str,
  network: str,
  psc_connection_id: str,
  service_attachment: str,
  project_id: str = None
) -> None
```

###### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection.parameter.forwardingRule"></a>

- *Type:* str

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#forwarding_rule GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#forwarding_rule}

---

###### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection.parameter.ipAddress"></a>

- *Type:* str

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#ip_address GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#ip_address}

---

###### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection.parameter.network"></a>

- *Type:* str

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#network GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#network}

---

###### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection.parameter.pscConnectionId"></a>

- *Type:* str

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#psc_connection_id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#psc_connection_id}

---

###### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection.parameter.serviceAttachment"></a>

- *Type:* str

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#service_attachment GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#service_attachment}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection.parameter.projectId"></a>

- *Type:* str

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_memorystore_instance_desired_user_created_endpoints#project_id GoogleMemorystoreInstanceDesiredUserCreatedEndpoints#project_id}

---

##### `reset_psc_connection` <a name="reset_psc_connection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resetPscConnection"></a>

```python
def reset_psc_connection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnection">psc_connection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnectionInput">psc_connection_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `psc_connection`<sup>Required</sup> <a name="psc_connection" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnection"></a>

```python
psc_connection: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference</a>

---

##### `psc_connection_input`<sup>Optional</sup> <a name="psc_connection_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnectionInput"></a>

```python
psc_connection_input: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>]

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus">psc_connection_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput">forwarding_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput">psc_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput">service_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment">service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `psc_connection_status`<sup>Required</sup> <a name="psc_connection_status" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus"></a>

```python
psc_connection_status: str
```

- *Type:* str

---

##### `forwarding_rule_input`<sup>Optional</sup> <a name="forwarding_rule_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput"></a>

```python
forwarding_rule_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `psc_connection_id_input`<sup>Optional</sup> <a name="psc_connection_id_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput"></a>

```python
psc_connection_id_input: str
```

- *Type:* str

---

##### `service_attachment_input`<sup>Optional</sup> <a name="service_attachment_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput"></a>

```python
service_attachment_input: str
```

- *Type:* str

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

---

##### `service_attachment`<sup>Required</sup> <a name="service_attachment" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment"></a>

```python
service_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>]]

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections">put_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resetConnections">reset_connections</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connections` <a name="put_connections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections"></a>

```python
def put_connections(
  value: typing.Union[IResolvable, typing.List[GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>]]

---

##### `reset_connections` <a name="reset_connections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resetConnections"></a>

```python
def reset_connections() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connectionsInput">connections_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connections"></a>

```python
connections: GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList</a>

---

##### `connections_input`<sup>Optional</sup> <a name="connections_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connectionsInput"></a>

```python
connections_input: typing.Union[IResolvable, typing.List[GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints</a>]

---


### GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference <a name="GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_memorystore_instance_desired_user_created_endpoints

googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMemorystoreInstanceDesiredUserCreatedEndpoints.GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">GoogleMemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>]

---



