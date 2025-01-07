# `googleKmsSecretCiphertext` Submodule <a name="`googleKmsSecretCiphertext` Submodule" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsSecretCiphertext <a name="GoogleKmsSecretCiphertext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext google_kms_secret_ciphertext}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_secret_ciphertext

googleKmsSecretCiphertext.GoogleKmsSecretCiphertext(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  crypto_key: str,
  plaintext: str,
  additional_authenticated_data: str = None,
  id: str = None,
  timeouts: GoogleKmsSecretCiphertextTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.cryptoKey">crypto_key</a></code> | <code>str</code> | The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.plaintext">plaintext</a></code> | <code>str</code> | The plaintext to be encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.additionalAuthenticatedData">additional_authenticated_data</a></code> | <code>str</code> | The additional authenticated data used for integrity checks during encryption and decryption. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#id GoogleKmsSecretCiphertext#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.cryptoKey"></a>

- *Type:* str

The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#crypto_key GoogleKmsSecretCiphertext#crypto_key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.plaintext"></a>

- *Type:* str

The plaintext to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#plaintext GoogleKmsSecretCiphertext#plaintext}

---

##### `additional_authenticated_data`<sup>Optional</sup> <a name="additional_authenticated_data" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.additionalAuthenticatedData"></a>

- *Type:* str

The additional authenticated data used for integrity checks during encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#additional_authenticated_data GoogleKmsSecretCiphertext#additional_authenticated_data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#id GoogleKmsSecretCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#timeouts GoogleKmsSecretCiphertext#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetAdditionalAuthenticatedData">reset_additional_authenticated_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#create GoogleKmsSecretCiphertext#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#delete GoogleKmsSecretCiphertext#delete}.

---

##### `reset_additional_authenticated_data` <a name="reset_additional_authenticated_data" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetAdditionalAuthenticatedData"></a>

```python
def reset_additional_authenticated_data() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleKmsSecretCiphertext resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_secret_ciphertext

googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_secret_ciphertext

googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_secret_ciphertext

googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_secret_ciphertext

googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleKmsSecretCiphertext resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleKmsSecretCiphertext to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleKmsSecretCiphertext that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsSecretCiphertext to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.ciphertext">ciphertext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference">GoogleKmsSecretCiphertextTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedDataInput">additional_authenticated_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKeyInput">crypto_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedData">additional_authenticated_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKey">crypto_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.ciphertext"></a>

```python
ciphertext: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeouts"></a>

```python
timeouts: GoogleKmsSecretCiphertextTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference">GoogleKmsSecretCiphertextTimeoutsOutputReference</a>

---

##### `additional_authenticated_data_input`<sup>Optional</sup> <a name="additional_authenticated_data_input" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedDataInput"></a>

```python
additional_authenticated_data_input: str
```

- *Type:* str

---

##### `crypto_key_input`<sup>Optional</sup> <a name="crypto_key_input" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKeyInput"></a>

```python
crypto_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleKmsSecretCiphertextTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>]

---

##### `additional_authenticated_data`<sup>Required</sup> <a name="additional_authenticated_data" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.additionalAuthenticatedData"></a>

```python
additional_authenticated_data: str
```

- *Type:* str

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.cryptoKey"></a>

```python
crypto_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertext.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsSecretCiphertextConfig <a name="GoogleKmsSecretCiphertextConfig" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_secret_ciphertext

googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  crypto_key: str,
  plaintext: str,
  additional_authenticated_data: str = None,
  id: str = None,
  timeouts: GoogleKmsSecretCiphertextTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.cryptoKey">crypto_key</a></code> | <code>str</code> | The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.plaintext">plaintext</a></code> | <code>str</code> | The plaintext to be encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.additionalAuthenticatedData">additional_authenticated_data</a></code> | <code>str</code> | The additional authenticated data used for integrity checks during encryption and decryption. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#id GoogleKmsSecretCiphertext#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.cryptoKey"></a>

```python
crypto_key: str
```

- *Type:* str

The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#crypto_key GoogleKmsSecretCiphertext#crypto_key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

The plaintext to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#plaintext GoogleKmsSecretCiphertext#plaintext}

---

##### `additional_authenticated_data`<sup>Optional</sup> <a name="additional_authenticated_data" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.additionalAuthenticatedData"></a>

```python
additional_authenticated_data: str
```

- *Type:* str

The additional authenticated data used for integrity checks during encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#additional_authenticated_data GoogleKmsSecretCiphertext#additional_authenticated_data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#id GoogleKmsSecretCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextConfig.property.timeouts"></a>

```python
timeouts: GoogleKmsSecretCiphertextTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#timeouts GoogleKmsSecretCiphertext#timeouts}

---

### GoogleKmsSecretCiphertextTimeouts <a name="GoogleKmsSecretCiphertextTimeouts" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_secret_ciphertext

googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#create GoogleKmsSecretCiphertext#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#delete GoogleKmsSecretCiphertext#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#create GoogleKmsSecretCiphertext#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_kms_secret_ciphertext#delete GoogleKmsSecretCiphertext#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsSecretCiphertextTimeoutsOutputReference <a name="GoogleKmsSecretCiphertextTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_secret_ciphertext

googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleKmsSecretCiphertextTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsSecretCiphertext.GoogleKmsSecretCiphertextTimeouts">GoogleKmsSecretCiphertextTimeouts</a>]

---



