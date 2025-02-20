# `dataGoogleKmsSecretAsymmetric` Submodule <a name="`dataGoogleKmsSecretAsymmetric` Submodule" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsSecretAsymmetric <a name="DataGoogleKmsSecretAsymmetric" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric google_kms_secret_asymmetric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_kms_secret_asymmetric

dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ciphertext: str,
  crypto_key_version: str,
  crc32: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.ciphertext">ciphertext</a></code> | <code>str</code> | The public key encrypted ciphertext in base64 encoding. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.cryptoKeyVersion">crypto_key_version</a></code> | <code>str</code> | The fully qualified KMS crypto key version name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.crc32">crc32</a></code> | <code>str</code> | The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.ciphertext"></a>

- *Type:* str

The public key encrypted ciphertext in base64 encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#ciphertext DataGoogleKmsSecretAsymmetric#ciphertext}

---

##### `crypto_key_version`<sup>Required</sup> <a name="crypto_key_version" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.cryptoKeyVersion"></a>

- *Type:* str

The fully qualified KMS crypto key version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#crypto_key_version DataGoogleKmsSecretAsymmetric#crypto_key_version}

---

##### `crc32`<sup>Optional</sup> <a name="crc32" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.crc32"></a>

- *Type:* str

The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#crc32 DataGoogleKmsSecretAsymmetric#crc32}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetCrc32">reset_crc32</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_crc32` <a name="reset_crc32" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetCrc32"></a>

```python
def reset_crc32() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleKmsSecretAsymmetric resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_kms_secret_asymmetric

dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_kms_secret_asymmetric

dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_kms_secret_asymmetric

dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_kms_secret_asymmetric

dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleKmsSecretAsymmetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleKmsSecretAsymmetric to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleKmsSecretAsymmetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsSecretAsymmetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertextInput">ciphertext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32Input">crc32_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersionInput">crypto_key_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertext">ciphertext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32">crc32</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersion">crypto_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `ciphertext_input`<sup>Optional</sup> <a name="ciphertext_input" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertextInput"></a>

```python
ciphertext_input: str
```

- *Type:* str

---

##### `crc32_input`<sup>Optional</sup> <a name="crc32_input" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32Input"></a>

```python
crc32_input: str
```

- *Type:* str

---

##### `crypto_key_version_input`<sup>Optional</sup> <a name="crypto_key_version_input" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersionInput"></a>

```python
crypto_key_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.ciphertext"></a>

```python
ciphertext: str
```

- *Type:* str

---

##### `crc32`<sup>Required</sup> <a name="crc32" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.crc32"></a>

```python
crc32: str
```

- *Type:* str

---

##### `crypto_key_version`<sup>Required</sup> <a name="crypto_key_version" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.cryptoKeyVersion"></a>

```python
crypto_key_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetric.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsSecretAsymmetricConfig <a name="DataGoogleKmsSecretAsymmetricConfig" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_kms_secret_asymmetric

dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ciphertext: str,
  crypto_key_version: str,
  crc32: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.ciphertext">ciphertext</a></code> | <code>str</code> | The public key encrypted ciphertext in base64 encoding. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.cryptoKeyVersion">crypto_key_version</a></code> | <code>str</code> | The fully qualified KMS crypto key version name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.crc32">crc32</a></code> | <code>str</code> | The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.ciphertext"></a>

```python
ciphertext: str
```

- *Type:* str

The public key encrypted ciphertext in base64 encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#ciphertext DataGoogleKmsSecretAsymmetric#ciphertext}

---

##### `crypto_key_version`<sup>Required</sup> <a name="crypto_key_version" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.cryptoKeyVersion"></a>

```python
crypto_key_version: str
```

- *Type:* str

The fully qualified KMS crypto key version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#crypto_key_version DataGoogleKmsSecretAsymmetric#crypto_key_version}

---

##### `crc32`<sup>Optional</sup> <a name="crc32" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.crc32"></a>

```python
crc32: str
```

- *Type:* str

The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#crc32 DataGoogleKmsSecretAsymmetric#crc32}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleKmsSecretAsymmetric.DataGoogleKmsSecretAsymmetricConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



