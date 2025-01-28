# `googleFirebaseDatabaseInstance` Submodule <a name="`googleFirebaseDatabaseInstance` Submodule" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseDatabaseInstance <a name="GoogleFirebaseDatabaseInstance" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance google_firebase_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_database_instance

googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  region: str,
  desired_state: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseDatabaseInstanceTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The globally unique identifier of the Firebase Realtime Database instance. Instance IDs cannot be reused after deletion. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.region">region</a></code> | <code>str</code> | A reference to the region where the Firebase Realtime database resides. Check all [available regions](https://firebase.google.com/docs/projects/locations#rtdb-locations). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | The intended database state. Possible values: ACTIVE, DISABLED. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#id GoogleFirebaseDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#project GoogleFirebaseDatabaseInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts">GoogleFirebaseDatabaseInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.type">type</a></code> | <code>str</code> | The database type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.instanceId"></a>

- *Type:* str

The globally unique identifier of the Firebase Realtime Database instance. Instance IDs cannot be reused after deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#instance_id GoogleFirebaseDatabaseInstance#instance_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.region"></a>

- *Type:* str

A reference to the region where the Firebase Realtime database resides. Check all [available regions](https://firebase.google.com/docs/projects/locations#rtdb-locations).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#region GoogleFirebaseDatabaseInstance#region}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.desiredState"></a>

- *Type:* str

The intended database state. Possible values: ACTIVE, DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#desired_state GoogleFirebaseDatabaseInstance#desired_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#id GoogleFirebaseDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#project GoogleFirebaseDatabaseInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts">GoogleFirebaseDatabaseInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#timeouts GoogleFirebaseDatabaseInstance#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.Initializer.parameter.type"></a>

- *Type:* str

The database type.

Each project can create one default Firebase Realtime Database, which cannot be deleted once created.
Creating user Databases is only available for projects on the Blaze plan.
Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Default value: "USER_DATABASE" Possible values: ["DEFAULT_DATABASE", "USER_DATABASE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#type GoogleFirebaseDatabaseInstance#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#create GoogleFirebaseDatabaseInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#delete GoogleFirebaseDatabaseInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#update GoogleFirebaseDatabaseInstance#update}.

---

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleFirebaseDatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_database_instance

googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_database_instance

googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_database_instance

googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_database_instance

googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleFirebaseDatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirebaseDatabaseInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirebaseDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.databaseUrl">database_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference">GoogleFirebaseDatabaseInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts">GoogleFirebaseDatabaseInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_url`<sup>Required</sup> <a name="database_url" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.databaseUrl"></a>

```python
database_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.timeouts"></a>

```python
timeouts: GoogleFirebaseDatabaseInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference">GoogleFirebaseDatabaseInstanceTimeoutsOutputReference</a>

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleFirebaseDatabaseInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts">GoogleFirebaseDatabaseInstanceTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseDatabaseInstanceConfig <a name="GoogleFirebaseDatabaseInstanceConfig" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_database_instance

googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  region: str,
  desired_state: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseDatabaseInstanceTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The globally unique identifier of the Firebase Realtime Database instance. Instance IDs cannot be reused after deletion. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.region">region</a></code> | <code>str</code> | A reference to the region where the Firebase Realtime database resides. Check all [available regions](https://firebase.google.com/docs/projects/locations#rtdb-locations). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.desiredState">desired_state</a></code> | <code>str</code> | The intended database state. Possible values: ACTIVE, DISABLED. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#id GoogleFirebaseDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#project GoogleFirebaseDatabaseInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts">GoogleFirebaseDatabaseInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.type">type</a></code> | <code>str</code> | The database type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The globally unique identifier of the Firebase Realtime Database instance. Instance IDs cannot be reused after deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#instance_id GoogleFirebaseDatabaseInstance#instance_id}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

A reference to the region where the Firebase Realtime database resides. Check all [available regions](https://firebase.google.com/docs/projects/locations#rtdb-locations).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#region GoogleFirebaseDatabaseInstance#region}

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

The intended database state. Possible values: ACTIVE, DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#desired_state GoogleFirebaseDatabaseInstance#desired_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#id GoogleFirebaseDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#project GoogleFirebaseDatabaseInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseDatabaseInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts">GoogleFirebaseDatabaseInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#timeouts GoogleFirebaseDatabaseInstance#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The database type.

Each project can create one default Firebase Realtime Database, which cannot be deleted once created.
Creating user Databases is only available for projects on the Blaze plan.
Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Default value: "USER_DATABASE" Possible values: ["DEFAULT_DATABASE", "USER_DATABASE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#type GoogleFirebaseDatabaseInstance#type}

---

### GoogleFirebaseDatabaseInstanceTimeouts <a name="GoogleFirebaseDatabaseInstanceTimeouts" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_database_instance

googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#create GoogleFirebaseDatabaseInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#delete GoogleFirebaseDatabaseInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#update GoogleFirebaseDatabaseInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#create GoogleFirebaseDatabaseInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#delete GoogleFirebaseDatabaseInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_firebase_database_instance#update GoogleFirebaseDatabaseInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseDatabaseInstanceTimeoutsOutputReference <a name="GoogleFirebaseDatabaseInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_database_instance

googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts">GoogleFirebaseDatabaseInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleFirebaseDatabaseInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseDatabaseInstance.GoogleFirebaseDatabaseInstanceTimeouts">GoogleFirebaseDatabaseInstanceTimeouts</a>]

---



