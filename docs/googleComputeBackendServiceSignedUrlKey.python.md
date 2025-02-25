# `googleComputeBackendServiceSignedUrlKey` Submodule <a name="`googleComputeBackendServiceSignedUrlKey` Submodule" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeBackendServiceSignedUrlKey <a name="GoogleComputeBackendServiceSignedUrlKey" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key google_compute_backend_service_signed_url_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_backend_service_signed_url_key

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_service: str,
  key_value: str,
  name: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleComputeBackendServiceSignedUrlKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.backendService">backend_service</a></code> | <code>str</code> | The backend service this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.keyValue">key_value</a></code> | <code>str</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#id GoogleComputeBackendServiceSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#project GoogleComputeBackendServiceSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.backendService"></a>

- *Type:* str

The backend service this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#backend_service GoogleComputeBackendServiceSignedUrlKey#backend_service}

---

##### `key_value`<sup>Required</sup> <a name="key_value" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.keyValue"></a>

- *Type:* str

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#key_value GoogleComputeBackendServiceSignedUrlKey#key_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.name"></a>

- *Type:* str

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#name GoogleComputeBackendServiceSignedUrlKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#id GoogleComputeBackendServiceSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#project GoogleComputeBackendServiceSignedUrlKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#timeouts GoogleComputeBackendServiceSignedUrlKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#create GoogleComputeBackendServiceSignedUrlKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#delete GoogleComputeBackendServiceSignedUrlKey#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeBackendServiceSignedUrlKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_backend_service_signed_url_key

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_backend_service_signed_url_key

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_backend_service_signed_url_key

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_backend_service_signed_url_key

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeBackendServiceSignedUrlKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeBackendServiceSignedUrlKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeBackendServiceSignedUrlKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeBackendServiceSignedUrlKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendServiceInput">backend_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValueInput">key_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendService">backend_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValue">key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeouts"></a>

```python
timeouts: GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a>

---

##### `backend_service_input`<sup>Optional</sup> <a name="backend_service_input" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendServiceInput"></a>

```python
backend_service_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_value_input`<sup>Optional</sup> <a name="key_value_input" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValueInput"></a>

```python
key_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeBackendServiceSignedUrlKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.backendService"></a>

```python
backend_service: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_value`<sup>Required</sup> <a name="key_value" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.keyValue"></a>

```python
key_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeBackendServiceSignedUrlKeyConfig <a name="GoogleComputeBackendServiceSignedUrlKeyConfig" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_backend_service_signed_url_key

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_service: str,
  key_value: str,
  name: str,
  id: str = None,
  project: str = None,
  timeouts: GoogleComputeBackendServiceSignedUrlKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.backendService">backend_service</a></code> | <code>str</code> | The backend service this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.keyValue">key_value</a></code> | <code>str</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.name">name</a></code> | <code>str</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#id GoogleComputeBackendServiceSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#project GoogleComputeBackendServiceSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.backendService"></a>

```python
backend_service: str
```

- *Type:* str

The backend service this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#backend_service GoogleComputeBackendServiceSignedUrlKey#backend_service}

---

##### `key_value`<sup>Required</sup> <a name="key_value" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.keyValue"></a>

```python
key_value: str
```

- *Type:* str

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#key_value GoogleComputeBackendServiceSignedUrlKey#key_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#name GoogleComputeBackendServiceSignedUrlKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#id GoogleComputeBackendServiceSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#project GoogleComputeBackendServiceSignedUrlKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeBackendServiceSignedUrlKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#timeouts GoogleComputeBackendServiceSignedUrlKey#timeouts}

---

### GoogleComputeBackendServiceSignedUrlKeyTimeouts <a name="GoogleComputeBackendServiceSignedUrlKeyTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_backend_service_signed_url_key

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#create GoogleComputeBackendServiceSignedUrlKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#delete GoogleComputeBackendServiceSignedUrlKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#create GoogleComputeBackendServiceSignedUrlKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_compute_backend_service_signed_url_key#delete GoogleComputeBackendServiceSignedUrlKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference <a name="GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_backend_service_signed_url_key

googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeBackendServiceSignedUrlKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeBackendServiceSignedUrlKey.GoogleComputeBackendServiceSignedUrlKeyTimeouts">GoogleComputeBackendServiceSignedUrlKeyTimeouts</a>]

---



