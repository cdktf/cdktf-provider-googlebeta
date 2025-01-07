# `googleEventarcGoogleChannelConfig` Submodule <a name="`googleEventarcGoogleChannelConfig` Submodule" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcGoogleChannelConfig <a name="GoogleEventarcGoogleChannelConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config google_eventarc_google_channel_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_google_channel_config

googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig(
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
  crypto_key_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleEventarcGoogleChannelConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#id GoogleEventarcGoogleChannelConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#location GoogleEventarcGoogleChannelConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.name"></a>

- *Type:* str

Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#name GoogleEventarcGoogleChannelConfig#name}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.cryptoKeyName"></a>

- *Type:* str

Optional.

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/* /locations/* /keyRings/* /cryptoKeys/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#crypto_key_name GoogleEventarcGoogleChannelConfig#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#id GoogleEventarcGoogleChannelConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#project GoogleEventarcGoogleChannelConfig#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#timeouts GoogleEventarcGoogleChannelConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetCryptoKeyName">reset_crypto_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#create GoogleEventarcGoogleChannelConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#delete GoogleEventarcGoogleChannelConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#update GoogleEventarcGoogleChannelConfig#update}.

---

##### `reset_crypto_key_name` <a name="reset_crypto_key_name" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetCryptoKeyName"></a>

```python
def reset_crypto_key_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleEventarcGoogleChannelConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_google_channel_config

googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_google_channel_config

googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_google_channel_config

googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_google_channel_config

googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleEventarcGoogleChannelConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleEventarcGoogleChannelConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleEventarcGoogleChannelConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEventarcGoogleChannelConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference">GoogleEventarcGoogleChannelConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyNameInput">crypto_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeouts"></a>

```python
timeouts: GoogleEventarcGoogleChannelConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference">GoogleEventarcGoogleChannelConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `crypto_key_name_input`<sup>Optional</sup> <a name="crypto_key_name_input" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyNameInput"></a>

```python
crypto_key_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleEventarcGoogleChannelConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>]

---

##### `crypto_key_name`<sup>Required</sup> <a name="crypto_key_name" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcGoogleChannelConfigConfig <a name="GoogleEventarcGoogleChannelConfigConfig" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_google_channel_config

googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  crypto_key_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleEventarcGoogleChannelConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.name">name</a></code> | <code>str</code> | Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.cryptoKeyName">crypto_key_name</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#id GoogleEventarcGoogleChannelConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#location GoogleEventarcGoogleChannelConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#name GoogleEventarcGoogleChannelConfig#name}

---

##### `crypto_key_name`<sup>Optional</sup> <a name="crypto_key_name" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.cryptoKeyName"></a>

```python
crypto_key_name: str
```

- *Type:* str

Optional.

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern `projects/* /locations/* /keyRings/* /cryptoKeys/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#crypto_key_name GoogleEventarcGoogleChannelConfig#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#id GoogleEventarcGoogleChannelConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#project GoogleEventarcGoogleChannelConfig#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleEventarcGoogleChannelConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#timeouts GoogleEventarcGoogleChannelConfig#timeouts}

---

### GoogleEventarcGoogleChannelConfigTimeouts <a name="GoogleEventarcGoogleChannelConfigTimeouts" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_google_channel_config

googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#create GoogleEventarcGoogleChannelConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#delete GoogleEventarcGoogleChannelConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#update GoogleEventarcGoogleChannelConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#create GoogleEventarcGoogleChannelConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#delete GoogleEventarcGoogleChannelConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_google_channel_config#update GoogleEventarcGoogleChannelConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcGoogleChannelConfigTimeoutsOutputReference <a name="GoogleEventarcGoogleChannelConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_google_channel_config

googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleEventarcGoogleChannelConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>]

---



