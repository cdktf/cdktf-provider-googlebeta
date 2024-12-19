# `googleHealthcareDicomStore` Submodule <a name="`googleHealthcareDicomStore` Submodule" id="@cdktf/provider-google-beta.googleHealthcareDicomStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareDicomStore <a name="GoogleHealthcareDicomStore" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store google_healthcare_dicom_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  name: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  notification_config: GoogleHealthcareDicomStoreNotificationConfig = None,
  stream_configs: typing.Union[IResolvable, typing.List[GoogleHealthcareDicomStoreStreamConfigs]] = None,
  timeouts: GoogleHealthcareDicomStoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name for the DicomStore. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#id GoogleHealthcareDicomStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize DICOM stores. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.streamConfigs">stream_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>]]</code> | stream_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.dataset"></a>

- *Type:* str

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#dataset GoogleHealthcareDicomStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.name"></a>

- *Type:* str

The resource name for the DicomStore.

** Changing this property may recreate the Dicom store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#name GoogleHealthcareDicomStore#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#id GoogleHealthcareDicomStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize DICOM stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#labels GoogleHealthcareDicomStore#labels}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.notificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#notification_config GoogleHealthcareDicomStore#notification_config}

---

##### `stream_configs`<sup>Optional</sup> <a name="stream_configs" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.streamConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>]]

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#stream_configs GoogleHealthcareDicomStore#stream_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#timeouts GoogleHealthcareDicomStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putNotificationConfig">put_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putStreamConfigs">put_stream_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetNotificationConfig">reset_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetStreamConfigs">reset_stream_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notification_config` <a name="put_notification_config" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putNotificationConfig"></a>

```python
def put_notification_config(
  pubsub_topic: str,
  send_for_bulk_import: typing.Union[bool, IResolvable] = None
) -> None
```

###### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putNotificationConfig.parameter.pubsubTopic"></a>

- *Type:* str

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#pubsub_topic GoogleHealthcareDicomStore#pubsub_topic}

---

###### `send_for_bulk_import`<sup>Optional</sup> <a name="send_for_bulk_import" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putNotificationConfig.parameter.sendForBulkImport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#send_for_bulk_import GoogleHealthcareDicomStore#send_for_bulk_import}

---

##### `put_stream_configs` <a name="put_stream_configs" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putStreamConfigs"></a>

```python
def put_stream_configs(
  value: typing.Union[IResolvable, typing.List[GoogleHealthcareDicomStoreStreamConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putStreamConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#create GoogleHealthcareDicomStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#delete GoogleHealthcareDicomStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#update GoogleHealthcareDicomStore#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_notification_config` <a name="reset_notification_config" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetNotificationConfig"></a>

```python
def reset_notification_config() -> None
```

##### `reset_stream_configs` <a name="reset_stream_configs" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetStreamConfigs"></a>

```python
def reset_stream_configs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleHealthcareDicomStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleHealthcareDicomStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleHealthcareDicomStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleHealthcareDicomStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareDicomStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference">GoogleHealthcareDicomStoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.streamConfigs">stream_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList">GoogleHealthcareDicomStoreStreamConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference">GoogleHealthcareDicomStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.notificationConfigInput">notification_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.streamConfigsInput">stream_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `notification_config`<sup>Required</sup> <a name="notification_config" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.notificationConfig"></a>

```python
notification_config: GoogleHealthcareDicomStoreNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference">GoogleHealthcareDicomStoreNotificationConfigOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `stream_configs`<sup>Required</sup> <a name="stream_configs" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.streamConfigs"></a>

```python
stream_configs: GoogleHealthcareDicomStoreStreamConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList">GoogleHealthcareDicomStoreStreamConfigsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.timeouts"></a>

```python
timeouts: GoogleHealthcareDicomStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference">GoogleHealthcareDicomStoreTimeoutsOutputReference</a>

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_config_input`<sup>Optional</sup> <a name="notification_config_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.notificationConfigInput"></a>

```python
notification_config_input: GoogleHealthcareDicomStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a>

---

##### `stream_configs_input`<sup>Optional</sup> <a name="stream_configs_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.streamConfigsInput"></a>

```python
stream_configs_input: typing.Union[IResolvable, typing.List[GoogleHealthcareDicomStoreStreamConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleHealthcareDicomStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a>]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareDicomStoreConfig <a name="GoogleHealthcareDicomStoreConfig" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  name: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  notification_config: GoogleHealthcareDicomStoreNotificationConfig = None,
  stream_configs: typing.Union[IResolvable, typing.List[GoogleHealthcareDicomStoreStreamConfigs]] = None,
  timeouts: GoogleHealthcareDicomStoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.dataset">dataset</a></code> | <code>str</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.name">name</a></code> | <code>str</code> | The resource name for the DicomStore. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#id GoogleHealthcareDicomStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize DICOM stores. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.streamConfigs">stream_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>]]</code> | stream_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#dataset GoogleHealthcareDicomStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name for the DicomStore.

** Changing this property may recreate the Dicom store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#name GoogleHealthcareDicomStore#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#id GoogleHealthcareDicomStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize DICOM stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#labels GoogleHealthcareDicomStore#labels}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.notificationConfig"></a>

```python
notification_config: GoogleHealthcareDicomStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#notification_config GoogleHealthcareDicomStore#notification_config}

---

##### `stream_configs`<sup>Optional</sup> <a name="stream_configs" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.streamConfigs"></a>

```python
stream_configs: typing.Union[IResolvable, typing.List[GoogleHealthcareDicomStoreStreamConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>]]

stream_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#stream_configs GoogleHealthcareDicomStore#stream_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreConfig.property.timeouts"></a>

```python
timeouts: GoogleHealthcareDicomStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#timeouts GoogleHealthcareDicomStore#timeouts}

---

### GoogleHealthcareDicomStoreNotificationConfig <a name="GoogleHealthcareDicomStoreNotificationConfig" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig(
  pubsub_topic: str,
  send_for_bulk_import: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig.property.sendForBulkImport">send_for_bulk_import</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports. |

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#pubsub_topic GoogleHealthcareDicomStore#pubsub_topic}

---

##### `send_for_bulk_import`<sup>Optional</sup> <a name="send_for_bulk_import" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig.property.sendForBulkImport"></a>

```python
send_for_bulk_import: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#send_for_bulk_import GoogleHealthcareDicomStore#send_for_bulk_import}

---

### GoogleHealthcareDicomStoreStreamConfigs <a name="GoogleHealthcareDicomStoreStreamConfigs" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs(
  bigquery_destination: GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs.property.bigqueryDestination">bigquery_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a></code> | bigquery_destination block. |

---

##### `bigquery_destination`<sup>Required</sup> <a name="bigquery_destination" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs.property.bigqueryDestination"></a>

```python
bigquery_destination: GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#bigquery_destination GoogleHealthcareDicomStore#bigquery_destination}

---

### GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination <a name="GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination(
  table_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination.property.tableUri">table_uri</a></code> | <code>str</code> | a fully qualified BigQuery table URI where DICOM instance metadata will be streamed. |

---

##### `table_uri`<sup>Required</sup> <a name="table_uri" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination.property.tableUri"></a>

```python
table_uri: str
```

- *Type:* str

a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#table_uri GoogleHealthcareDicomStore#table_uri}

---

### GoogleHealthcareDicomStoreTimeouts <a name="GoogleHealthcareDicomStoreTimeouts" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#create GoogleHealthcareDicomStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#delete GoogleHealthcareDicomStore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#update GoogleHealthcareDicomStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#create GoogleHealthcareDicomStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#delete GoogleHealthcareDicomStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#update GoogleHealthcareDicomStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareDicomStoreNotificationConfigOutputReference <a name="GoogleHealthcareDicomStoreNotificationConfigOutputReference" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.resetSendForBulkImport">reset_send_for_bulk_import</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_send_for_bulk_import` <a name="reset_send_for_bulk_import" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.resetSendForBulkImport"></a>

```python
def reset_send_for_bulk_import() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImportInput">send_for_bulk_import_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImport">send_for_bulk_import</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `send_for_bulk_import_input`<sup>Optional</sup> <a name="send_for_bulk_import_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImportInput"></a>

```python
send_for_bulk_import_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

##### `send_for_bulk_import`<sup>Required</sup> <a name="send_for_bulk_import" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.sendForBulkImport"></a>

```python
send_for_bulk_import: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcareDicomStoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreNotificationConfig">GoogleHealthcareDicomStoreNotificationConfig</a>

---


### GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference <a name="GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.tableUriInput">table_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.tableUri">table_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `table_uri_input`<sup>Optional</sup> <a name="table_uri_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.tableUriInput"></a>

```python
table_uri_input: str
```

- *Type:* str

---

##### `table_uri`<sup>Required</sup> <a name="table_uri" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.tableUri"></a>

```python
table_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a>

---


### GoogleHealthcareDicomStoreStreamConfigsList <a name="GoogleHealthcareDicomStoreStreamConfigsList" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleHealthcareDicomStoreStreamConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleHealthcareDicomStoreStreamConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>]]

---


### GoogleHealthcareDicomStoreStreamConfigsOutputReference <a name="GoogleHealthcareDicomStoreStreamConfigsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.putBigqueryDestination">put_bigquery_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bigquery_destination` <a name="put_bigquery_destination" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.putBigqueryDestination"></a>

```python
def put_bigquery_destination(
  table_uri: str
) -> None
```

###### `table_uri`<sup>Required</sup> <a name="table_uri" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.putBigqueryDestination.parameter.tableUri"></a>

- *Type:* str

a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_dicom_store#table_uri GoogleHealthcareDicomStore#table_uri}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.bigqueryDestination">bigquery_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.bigqueryDestinationInput">bigquery_destination_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bigquery_destination`<sup>Required</sup> <a name="bigquery_destination" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.bigqueryDestination"></a>

```python
bigquery_destination: GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestinationOutputReference</a>

---

##### `bigquery_destination_input`<sup>Optional</sup> <a name="bigquery_destination_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.bigqueryDestinationInput"></a>

```python
bigquery_destination_input: GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination">GoogleHealthcareDicomStoreStreamConfigsBigqueryDestination</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleHealthcareDicomStoreStreamConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreStreamConfigs">GoogleHealthcareDicomStoreStreamConfigs</a>]

---


### GoogleHealthcareDicomStoreTimeoutsOutputReference <a name="GoogleHealthcareDicomStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_dicom_store

googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleHealthcareDicomStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareDicomStore.GoogleHealthcareDicomStoreTimeouts">GoogleHealthcareDicomStoreTimeouts</a>]

---



