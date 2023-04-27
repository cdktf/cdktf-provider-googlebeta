# `google_os_login_ssh_public_key`

Refer to the Terraform Registory for docs: [`google_os_login_ssh_public_key`](https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key).

# `googleOsLoginSshPublicKey` Submodule <a name="`googleOsLoginSshPublicKey` Submodule" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOsLoginSshPublicKey <a name="GoogleOsLoginSshPublicKey" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key google_os_login_ssh_public_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_login_ssh_public_key

googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  user: str,
  expiration_time_usec: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleOsLoginSshPublicKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.key">key</a></code> | <code>str</code> | Public key text in SSH format, defined by RFC4253 section 6.6. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.user">user</a></code> | <code>str</code> | The user email. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.expirationTimeUsec">expiration_time_usec</a></code> | <code>str</code> | An expiration time in microseconds since epoch. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#id GoogleOsLoginSshPublicKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.project">project</a></code> | <code>str</code> | The project ID of the Google Cloud Platform project. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.key"></a>

- *Type:* str

Public key text in SSH format, defined by RFC4253 section 6.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#key GoogleOsLoginSshPublicKey#key}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.user"></a>

- *Type:* str

The user email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#user GoogleOsLoginSshPublicKey#user}

---

##### `expiration_time_usec`<sup>Optional</sup> <a name="expiration_time_usec" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.expirationTimeUsec"></a>

- *Type:* str

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#expiration_time_usec GoogleOsLoginSshPublicKey#expiration_time_usec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#id GoogleOsLoginSshPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.project"></a>

- *Type:* str

The project ID of the Google Cloud Platform project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#project GoogleOsLoginSshPublicKey#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#timeouts GoogleOsLoginSshPublicKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetExpirationTimeUsec">reset_expiration_time_usec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#create GoogleOsLoginSshPublicKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#delete GoogleOsLoginSshPublicKey#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#update GoogleOsLoginSshPublicKey#update}.

---

##### `reset_expiration_time_usec` <a name="reset_expiration_time_usec" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetExpirationTimeUsec"></a>

```python
def reset_expiration_time_usec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_login_ssh_public_key

googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_login_ssh_public_key

googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_login_ssh_public_key

googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference">GoogleOsLoginSshPublicKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.expirationTimeUsecInput">expiration_time_usec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.expirationTimeUsec">expiration_time_usec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.user">user</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.timeouts"></a>

```python
timeouts: GoogleOsLoginSshPublicKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference">GoogleOsLoginSshPublicKeyTimeoutsOutputReference</a>

---

##### `expiration_time_usec_input`<sup>Optional</sup> <a name="expiration_time_usec_input" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.expirationTimeUsecInput"></a>

```python
expiration_time_usec_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleOsLoginSshPublicKeyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a>, cdktf.IResolvable]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `expiration_time_usec`<sup>Required</sup> <a name="expiration_time_usec" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.expirationTimeUsec"></a>

```python
expiration_time_usec: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.user"></a>

```python
user: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOsLoginSshPublicKeyConfig <a name="GoogleOsLoginSshPublicKeyConfig" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_login_ssh_public_key

googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  user: str,
  expiration_time_usec: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleOsLoginSshPublicKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.key">key</a></code> | <code>str</code> | Public key text in SSH format, defined by RFC4253 section 6.6. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.user">user</a></code> | <code>str</code> | The user email. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.expirationTimeUsec">expiration_time_usec</a></code> | <code>str</code> | An expiration time in microseconds since epoch. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#id GoogleOsLoginSshPublicKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.project">project</a></code> | <code>str</code> | The project ID of the Google Cloud Platform project. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Public key text in SSH format, defined by RFC4253 section 6.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#key GoogleOsLoginSshPublicKey#key}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.user"></a>

```python
user: str
```

- *Type:* str

The user email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#user GoogleOsLoginSshPublicKey#user}

---

##### `expiration_time_usec`<sup>Optional</sup> <a name="expiration_time_usec" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.expirationTimeUsec"></a>

```python
expiration_time_usec: str
```

- *Type:* str

An expiration time in microseconds since epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#expiration_time_usec GoogleOsLoginSshPublicKey#expiration_time_usec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#id GoogleOsLoginSshPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project ID of the Google Cloud Platform project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#project GoogleOsLoginSshPublicKey#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyConfig.property.timeouts"></a>

```python
timeouts: GoogleOsLoginSshPublicKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#timeouts GoogleOsLoginSshPublicKey#timeouts}

---

### GoogleOsLoginSshPublicKeyTimeouts <a name="GoogleOsLoginSshPublicKeyTimeouts" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_login_ssh_public_key

googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#create GoogleOsLoginSshPublicKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#delete GoogleOsLoginSshPublicKey#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#update GoogleOsLoginSshPublicKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#create GoogleOsLoginSshPublicKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#delete GoogleOsLoginSshPublicKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.1/docs/resources/google_os_login_ssh_public_key#update GoogleOsLoginSshPublicKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOsLoginSshPublicKeyTimeoutsOutputReference <a name="GoogleOsLoginSshPublicKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_login_ssh_public_key

googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleOsLoginSshPublicKeyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleOsLoginSshPublicKey.GoogleOsLoginSshPublicKeyTimeouts">GoogleOsLoginSshPublicKeyTimeouts</a>, cdktf.IResolvable]

---



