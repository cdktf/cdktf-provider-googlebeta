# `googleServiceAccountKey` Submodule <a name="`googleServiceAccountKey` Submodule" id="@cdktf/provider-google-beta.googleServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceAccountKey <a name="GoogleServiceAccountKey" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key google_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_account_key

googleServiceAccountKey.GoogleServiceAccountKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_account_id: str,
  id: str = None,
  keepers: typing.Mapping[str] = None,
  key_algorithm: str = None,
  private_key_type: str = None,
  public_key_data: str = None,
  public_key_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.serviceAccountId">service_account_id</a></code> | <code>str</code> | The ID of the parent service account of the key. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#id GoogleServiceAccountKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | The algorithm used to generate the key, used only on create. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.privateKeyType">private_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#private_key_type GoogleServiceAccountKey#private_key_type}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.publicKeyData">public_key_data</a></code> | <code>str</code> | A field that allows clients to upload their own public key. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.publicKeyType">public_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#public_key_type GoogleServiceAccountKey#public_key_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.serviceAccountId"></a>

- *Type:* str

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#service_account_id GoogleServiceAccountKey#service_account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#id GoogleServiceAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.keepers"></a>

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger recreation of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#keepers GoogleServiceAccountKey#keepers}

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.keyAlgorithm"></a>

- *Type:* str

The algorithm used to generate the key, used only on create.

KEY_ALG_RSA_2048 is the default algorithm. Valid values are: "KEY_ALG_RSA_1024", "KEY_ALG_RSA_2048".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#key_algorithm GoogleServiceAccountKey#key_algorithm}

---

##### `private_key_type`<sup>Optional</sup> <a name="private_key_type" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.privateKeyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#private_key_type GoogleServiceAccountKey#private_key_type}.

---

##### `public_key_data`<sup>Optional</sup> <a name="public_key_data" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.publicKeyData"></a>

- *Type:* str

A field that allows clients to upload their own public key.

If set, use this public key data to create a service account key for given service account. Please note, the expected format for this field is a base64 encoded X509_PEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#public_key_data GoogleServiceAccountKey#public_key_data}

---

##### `public_key_type`<sup>Optional</sup> <a name="public_key_type" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.Initializer.parameter.publicKeyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#public_key_type GoogleServiceAccountKey#public_key_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetKeepers">reset_keepers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetKeyAlgorithm">reset_key_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetPrivateKeyType">reset_private_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetPublicKeyData">reset_public_key_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetPublicKeyType">reset_public_key_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_keepers` <a name="reset_keepers" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetKeepers"></a>

```python
def reset_keepers() -> None
```

##### `reset_key_algorithm` <a name="reset_key_algorithm" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetKeyAlgorithm"></a>

```python
def reset_key_algorithm() -> None
```

##### `reset_private_key_type` <a name="reset_private_key_type" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetPrivateKeyType"></a>

```python
def reset_private_key_type() -> None
```

##### `reset_public_key_data` <a name="reset_public_key_data" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetPublicKeyData"></a>

```python
def reset_public_key_data() -> None
```

##### `reset_public_key_type` <a name="reset_public_key_type" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.resetPublicKeyType"></a>

```python
def reset_public_key_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleServiceAccountKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_account_key

googleServiceAccountKey.GoogleServiceAccountKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_account_key

googleServiceAccountKey.GoogleServiceAccountKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_account_key

googleServiceAccountKey.GoogleServiceAccountKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_account_key

googleServiceAccountKey.GoogleServiceAccountKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleServiceAccountKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleServiceAccountKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleServiceAccountKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleServiceAccountKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.validAfter">valid_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.validBefore">valid_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.keepersInput">keepers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.keyAlgorithmInput">key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.privateKeyTypeInput">private_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.publicKeyDataInput">public_key_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.publicKeyTypeInput">public_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.serviceAccountIdInput">service_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.privateKeyType">private_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.publicKeyData">public_key_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.publicKeyType">public_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `valid_after`<sup>Required</sup> <a name="valid_after" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.validAfter"></a>

```python
valid_after: str
```

- *Type:* str

---

##### `valid_before`<sup>Required</sup> <a name="valid_before" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.validBefore"></a>

```python
valid_before: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `keepers_input`<sup>Optional</sup> <a name="keepers_input" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.keepersInput"></a>

```python
keepers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_algorithm_input`<sup>Optional</sup> <a name="key_algorithm_input" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.keyAlgorithmInput"></a>

```python
key_algorithm_input: str
```

- *Type:* str

---

##### `private_key_type_input`<sup>Optional</sup> <a name="private_key_type_input" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.privateKeyTypeInput"></a>

```python
private_key_type_input: str
```

- *Type:* str

---

##### `public_key_data_input`<sup>Optional</sup> <a name="public_key_data_input" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.publicKeyDataInput"></a>

```python
public_key_data_input: str
```

- *Type:* str

---

##### `public_key_type_input`<sup>Optional</sup> <a name="public_key_type_input" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.publicKeyTypeInput"></a>

```python
public_key_type_input: str
```

- *Type:* str

---

##### `service_account_id_input`<sup>Optional</sup> <a name="service_account_id_input" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.serviceAccountIdInput"></a>

```python
service_account_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `keepers`<sup>Required</sup> <a name="keepers" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.keepers"></a>

```python
keepers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `private_key_type`<sup>Required</sup> <a name="private_key_type" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.privateKeyType"></a>

```python
private_key_type: str
```

- *Type:* str

---

##### `public_key_data`<sup>Required</sup> <a name="public_key_data" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.publicKeyData"></a>

```python
public_key_data: str
```

- *Type:* str

---

##### `public_key_type`<sup>Required</sup> <a name="public_key_type" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.publicKeyType"></a>

```python
public_key_type: str
```

- *Type:* str

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceAccountKeyConfig <a name="GoogleServiceAccountKeyConfig" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_service_account_key

googleServiceAccountKey.GoogleServiceAccountKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_account_id: str,
  id: str = None,
  keepers: typing.Mapping[str] = None,
  key_algorithm: str = None,
  private_key_type: str = None,
  public_key_data: str = None,
  public_key_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | The ID of the parent service account of the key. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#id GoogleServiceAccountKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.keepers">keepers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger recreation of resource. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | The algorithm used to generate the key, used only on create. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.privateKeyType">private_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#private_key_type GoogleServiceAccountKey#private_key_type}. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.publicKeyData">public_key_data</a></code> | <code>str</code> | A field that allows clients to upload their own public key. |
| <code><a href="#@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.publicKeyType">public_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#public_key_type GoogleServiceAccountKey#public_key_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#service_account_id GoogleServiceAccountKey#service_account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#id GoogleServiceAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepers`<sup>Optional</sup> <a name="keepers" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.keepers"></a>

```python
keepers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger recreation of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#keepers GoogleServiceAccountKey#keepers}

---

##### `key_algorithm`<sup>Optional</sup> <a name="key_algorithm" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

The algorithm used to generate the key, used only on create.

KEY_ALG_RSA_2048 is the default algorithm. Valid values are: "KEY_ALG_RSA_1024", "KEY_ALG_RSA_2048".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#key_algorithm GoogleServiceAccountKey#key_algorithm}

---

##### `private_key_type`<sup>Optional</sup> <a name="private_key_type" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.privateKeyType"></a>

```python
private_key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#private_key_type GoogleServiceAccountKey#private_key_type}.

---

##### `public_key_data`<sup>Optional</sup> <a name="public_key_data" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.publicKeyData"></a>

```python
public_key_data: str
```

- *Type:* str

A field that allows clients to upload their own public key.

If set, use this public key data to create a service account key for given service account. Please note, the expected format for this field is a base64 encoded X509_PEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#public_key_data GoogleServiceAccountKey#public_key_data}

---

##### `public_key_type`<sup>Optional</sup> <a name="public_key_type" id="@cdktf/provider-google-beta.googleServiceAccountKey.GoogleServiceAccountKeyConfig.property.publicKeyType"></a>

```python
public_key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_service_account_key#public_key_type GoogleServiceAccountKey#public_key_type}.

---



