# `googleLoggingFolderSettings` Submodule <a name="`googleLoggingFolderSettings` Submodule" id="@cdktf/provider-google-beta.googleLoggingFolderSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingFolderSettings <a name="GoogleLoggingFolderSettings" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings google_logging_folder_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_settings

googleLoggingFolderSettings.GoogleLoggingFolderSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  folder: str,
  disable_default_sink: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_name: str = None,
  storage_location: str = None,
  timeouts: GoogleLoggingFolderSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The folder for which to retrieve settings. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.disableDefaultSink">disable_default_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the _Default sink in newly created projects and folders will created in a disabled state. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#id GoogleLoggingFolderSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource name for the configured Cloud KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.storageLocation">storage_location</a></code> | <code>str</code> | The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.folder"></a>

- *Type:* str

The folder for which to retrieve settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#folder GoogleLoggingFolderSettings#folder}

---

##### `disable_default_sink`<sup>Optional</sup> <a name="disable_default_sink" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.disableDefaultSink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the _Default sink in newly created projects and folders will created in a disabled state.

This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#disable_default_sink GoogleLoggingFolderSettings#disable_default_sink}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#id GoogleLoggingFolderSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

The resource name for the configured Cloud KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#kms_key_name GoogleLoggingFolderSettings#kms_key_name}

---

##### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.storageLocation"></a>

- *Type:* str

The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#storage_location GoogleLoggingFolderSettings#storage_location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#timeouts GoogleLoggingFolderSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetDisableDefaultSink">reset_disable_default_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetStorageLocation">reset_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#create GoogleLoggingFolderSettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#delete GoogleLoggingFolderSettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#update GoogleLoggingFolderSettings#update}.

---

##### `reset_disable_default_sink` <a name="reset_disable_default_sink" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetDisableDefaultSink"></a>

```python
def reset_disable_default_sink() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_storage_location` <a name="reset_storage_location" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetStorageLocation"></a>

```python
def reset_storage_location() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleLoggingFolderSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_settings

googleLoggingFolderSettings.GoogleLoggingFolderSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_settings

googleLoggingFolderSettings.GoogleLoggingFolderSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_settings

googleLoggingFolderSettings.GoogleLoggingFolderSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_settings

googleLoggingFolderSettings.GoogleLoggingFolderSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleLoggingFolderSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleLoggingFolderSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleLoggingFolderSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingFolderSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsServiceAccountId">kms_service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.loggingServiceAccountId">logging_service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference">GoogleLoggingFolderSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.disableDefaultSinkInput">disable_default_sink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.storageLocationInput">storage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.disableDefaultSink">disable_default_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.storageLocation">storage_location</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kms_service_account_id`<sup>Required</sup> <a name="kms_service_account_id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsServiceAccountId"></a>

```python
kms_service_account_id: str
```

- *Type:* str

---

##### `logging_service_account_id`<sup>Required</sup> <a name="logging_service_account_id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.loggingServiceAccountId"></a>

```python
logging_service_account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.timeouts"></a>

```python
timeouts: GoogleLoggingFolderSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference">GoogleLoggingFolderSettingsTimeoutsOutputReference</a>

---

##### `disable_default_sink_input`<sup>Optional</sup> <a name="disable_default_sink_input" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.disableDefaultSinkInput"></a>

```python
disable_default_sink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.storageLocationInput"></a>

```python
storage_location_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleLoggingFolderSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a>]

---

##### `disable_default_sink`<sup>Required</sup> <a name="disable_default_sink" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.disableDefaultSink"></a>

```python
disable_default_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingFolderSettingsConfig <a name="GoogleLoggingFolderSettingsConfig" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_settings

googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  folder: str,
  disable_default_sink: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_name: str = None,
  storage_location: str = None,
  timeouts: GoogleLoggingFolderSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.folder">folder</a></code> | <code>str</code> | The folder for which to retrieve settings. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.disableDefaultSink">disable_default_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the _Default sink in newly created projects and folders will created in a disabled state. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#id GoogleLoggingFolderSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource name for the configured Cloud KMS key. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.storageLocation">storage_location</a></code> | <code>str</code> | The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The folder for which to retrieve settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#folder GoogleLoggingFolderSettings#folder}

---

##### `disable_default_sink`<sup>Optional</sup> <a name="disable_default_sink" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.disableDefaultSink"></a>

```python
disable_default_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the _Default sink in newly created projects and folders will created in a disabled state.

This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#disable_default_sink GoogleLoggingFolderSettings#disable_default_sink}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#id GoogleLoggingFolderSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The resource name for the configured Cloud KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#kms_key_name GoogleLoggingFolderSettings#kms_key_name}

---

##### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#storage_location GoogleLoggingFolderSettings#storage_location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsConfig.property.timeouts"></a>

```python
timeouts: GoogleLoggingFolderSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#timeouts GoogleLoggingFolderSettings#timeouts}

---

### GoogleLoggingFolderSettingsTimeouts <a name="GoogleLoggingFolderSettingsTimeouts" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_settings

googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#create GoogleLoggingFolderSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#delete GoogleLoggingFolderSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#update GoogleLoggingFolderSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#create GoogleLoggingFolderSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#delete GoogleLoggingFolderSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_folder_settings#update GoogleLoggingFolderSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingFolderSettingsTimeoutsOutputReference <a name="GoogleLoggingFolderSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_folder_settings

googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleLoggingFolderSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLoggingFolderSettings.GoogleLoggingFolderSettingsTimeouts">GoogleLoggingFolderSettingsTimeouts</a>]

---



