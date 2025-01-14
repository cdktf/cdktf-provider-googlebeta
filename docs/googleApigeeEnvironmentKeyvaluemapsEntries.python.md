# `googleApigeeEnvironmentKeyvaluemapsEntries` Submodule <a name="`googleApigeeEnvironmentKeyvaluemapsEntries` Submodule" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentKeyvaluemapsEntries <a name="GoogleApigeeEnvironmentKeyvaluemapsEntries" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries google_apigee_environment_keyvaluemaps_entries}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_keyvaluemaps_entries

googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_keyvaluemap_id: str,
  name: str,
  value: str,
  id: str = None,
  timeouts: GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.envKeyvaluemapId">env_keyvaluemap_id</a></code> | <code>str</code> | The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.name">name</a></code> | <code>str</code> | Required. Resource URI that can be used to identify the scope of the key value map entries. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.value">value</a></code> | <code>str</code> | Required. Data or payload that is being retrieved and associated with the unique key. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#id GoogleApigeeEnvironmentKeyvaluemapsEntries#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_keyvaluemap_id`<sup>Required</sup> <a name="env_keyvaluemap_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.envKeyvaluemapId"></a>

- *Type:* str

The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#env_keyvaluemap_id GoogleApigeeEnvironmentKeyvaluemapsEntries#env_keyvaluemap_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.name"></a>

- *Type:* str

Required. Resource URI that can be used to identify the scope of the key value map entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#name GoogleApigeeEnvironmentKeyvaluemapsEntries#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.value"></a>

- *Type:* str

Required. Data or payload that is being retrieved and associated with the unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#value GoogleApigeeEnvironmentKeyvaluemapsEntries#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#id GoogleApigeeEnvironmentKeyvaluemapsEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#timeouts GoogleApigeeEnvironmentKeyvaluemapsEntries#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#create GoogleApigeeEnvironmentKeyvaluemapsEntries#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#delete GoogleApigeeEnvironmentKeyvaluemapsEntries#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApigeeEnvironmentKeyvaluemapsEntries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_keyvaluemaps_entries

googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_keyvaluemaps_entries

googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_keyvaluemaps_entries

googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_keyvaluemaps_entries

googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApigeeEnvironmentKeyvaluemapsEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApigeeEnvironmentKeyvaluemapsEntries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApigeeEnvironmentKeyvaluemapsEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentKeyvaluemapsEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapIdInput">env_keyvaluemap_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapId">env_keyvaluemap_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeouts"></a>

```python
timeouts: GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference</a>

---

##### `env_keyvaluemap_id_input`<sup>Optional</sup> <a name="env_keyvaluemap_id_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapIdInput"></a>

```python
env_keyvaluemap_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `env_keyvaluemap_id`<sup>Required</sup> <a name="env_keyvaluemap_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.envKeyvaluemapId"></a>

```python
env_keyvaluemap_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig <a name="GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_keyvaluemaps_entries

googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_keyvaluemap_id: str,
  name: str,
  value: str,
  id: str = None,
  timeouts: GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.envKeyvaluemapId">env_keyvaluemap_id</a></code> | <code>str</code> | The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.name">name</a></code> | <code>str</code> | Required. Resource URI that can be used to identify the scope of the key value map entries. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.value">value</a></code> | <code>str</code> | Required. Data or payload that is being retrieved and associated with the unique key. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#id GoogleApigeeEnvironmentKeyvaluemapsEntries#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_keyvaluemap_id`<sup>Required</sup> <a name="env_keyvaluemap_id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.envKeyvaluemapId"></a>

```python
env_keyvaluemap_id: str
```

- *Type:* str

The Apigee environment keyvalumaps Id associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}/keyvaluemaps/{{keyvaluemap_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#env_keyvaluemap_id GoogleApigeeEnvironmentKeyvaluemapsEntries#env_keyvaluemap_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Required. Resource URI that can be used to identify the scope of the key value map entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#name GoogleApigeeEnvironmentKeyvaluemapsEntries#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Required. Data or payload that is being retrieved and associated with the unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#value GoogleApigeeEnvironmentKeyvaluemapsEntries#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#id GoogleApigeeEnvironmentKeyvaluemapsEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesConfig.property.timeouts"></a>

```python
timeouts: GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#timeouts GoogleApigeeEnvironmentKeyvaluemapsEntries#timeouts}

---

### GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts <a name="GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_keyvaluemaps_entries

googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#create GoogleApigeeEnvironmentKeyvaluemapsEntries#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#delete GoogleApigeeEnvironmentKeyvaluemapsEntries#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#create GoogleApigeeEnvironmentKeyvaluemapsEntries#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_apigee_environment_keyvaluemaps_entries#delete GoogleApigeeEnvironmentKeyvaluemapsEntries#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference <a name="GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apigee_environment_keyvaluemaps_entries

googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApigeeEnvironmentKeyvaluemapsEntries.GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts">GoogleApigeeEnvironmentKeyvaluemapsEntriesTimeouts</a>]

---



