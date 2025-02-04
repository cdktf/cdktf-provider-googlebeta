# `googleKmsCryptoKeyVersion` Submodule <a name="`googleKmsCryptoKeyVersion` Submodule" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsCryptoKeyVersion <a name="GoogleKmsCryptoKeyVersion" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version google_kms_crypto_key_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion(
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
  external_protection_level_options: GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions = None,
  id: str = None,
  state: str = None,
  timeouts: GoogleKmsCryptoKeyVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.cryptoKey">crypto_key</a></code> | <code>str</code> | The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.externalProtectionLevelOptions">external_protection_level_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | external_protection_level_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#id GoogleKmsCryptoKeyVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.state">state</a></code> | <code>str</code> | The current state of the CryptoKeyVersion. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.cryptoKey"></a>

- *Type:* str

The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#crypto_key GoogleKmsCryptoKeyVersion#crypto_key}

---

##### `external_protection_level_options`<sup>Optional</sup> <a name="external_protection_level_options" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.externalProtectionLevelOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

external_protection_level_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#external_protection_level_options GoogleKmsCryptoKeyVersion#external_protection_level_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#id GoogleKmsCryptoKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.state"></a>

- *Type:* str

The current state of the CryptoKeyVersion. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#state GoogleKmsCryptoKeyVersion#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#timeouts GoogleKmsCryptoKeyVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putExternalProtectionLevelOptions">put_external_protection_level_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetExternalProtectionLevelOptions">reset_external_protection_level_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_external_protection_level_options` <a name="put_external_protection_level_options" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putExternalProtectionLevelOptions"></a>

```python
def put_external_protection_level_options(
  ekm_connection_key_path: str = None,
  external_key_uri: str = None
) -> None
```

###### `ekm_connection_key_path`<sup>Optional</sup> <a name="ekm_connection_key_path" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putExternalProtectionLevelOptions.parameter.ekmConnectionKeyPath"></a>

- *Type:* str

The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#ekm_connection_key_path GoogleKmsCryptoKeyVersion#ekm_connection_key_path}

---

###### `external_key_uri`<sup>Optional</sup> <a name="external_key_uri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putExternalProtectionLevelOptions.parameter.externalKeyUri"></a>

- *Type:* str

The URI for an external resource that this CryptoKeyVersion represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#external_key_uri GoogleKmsCryptoKeyVersion#external_key_uri}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#create GoogleKmsCryptoKeyVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#delete GoogleKmsCryptoKeyVersion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#update GoogleKmsCryptoKeyVersion#update}.

---

##### `reset_external_protection_level_options` <a name="reset_external_protection_level_options" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetExternalProtectionLevelOptions"></a>

```python
def reset_external_protection_level_options() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleKmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleKmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleKmsCryptoKeyVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleKmsCryptoKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsCryptoKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList">GoogleKmsCryptoKeyVersionAttestationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptions">external_protection_level_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.generateTime">generate_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.protectionLevel">protection_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference">GoogleKmsCryptoKeyVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKeyInput">crypto_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptionsInput">external_protection_level_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKey">crypto_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.attestation"></a>

```python
attestation: GoogleKmsCryptoKeyVersionAttestationList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList">GoogleKmsCryptoKeyVersionAttestationList</a>

---

##### `external_protection_level_options`<sup>Required</sup> <a name="external_protection_level_options" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptions"></a>

```python
external_protection_level_options: GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference</a>

---

##### `generate_time`<sup>Required</sup> <a name="generate_time" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.generateTime"></a>

```python
generate_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protection_level`<sup>Required</sup> <a name="protection_level" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.protectionLevel"></a>

```python
protection_level: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeouts"></a>

```python
timeouts: GoogleKmsCryptoKeyVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference">GoogleKmsCryptoKeyVersionTimeoutsOutputReference</a>

---

##### `crypto_key_input`<sup>Optional</sup> <a name="crypto_key_input" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKeyInput"></a>

```python
crypto_key_input: str
```

- *Type:* str

---

##### `external_protection_level_options_input`<sup>Optional</sup> <a name="external_protection_level_options_input" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.externalProtectionLevelOptionsInput"></a>

```python
external_protection_level_options_input: GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleKmsCryptoKeyVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>]

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.cryptoKey"></a>

```python
crypto_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsCryptoKeyVersionAttestation <a name="GoogleKmsCryptoKeyVersionAttestation" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation()
```


### GoogleKmsCryptoKeyVersionAttestationCertChains <a name="GoogleKmsCryptoKeyVersionAttestationCertChains" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains()
```


### GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions <a name="GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions()
```


### GoogleKmsCryptoKeyVersionConfig <a name="GoogleKmsCryptoKeyVersionConfig" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  crypto_key: str,
  external_protection_level_options: GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions = None,
  id: str = None,
  state: str = None,
  timeouts: GoogleKmsCryptoKeyVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.cryptoKey">crypto_key</a></code> | <code>str</code> | The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.externalProtectionLevelOptions">external_protection_level_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | external_protection_level_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#id GoogleKmsCryptoKeyVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.state">state</a></code> | <code>str</code> | The current state of the CryptoKeyVersion. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_key`<sup>Required</sup> <a name="crypto_key" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.cryptoKey"></a>

```python
crypto_key: str
```

- *Type:* str

The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#crypto_key GoogleKmsCryptoKeyVersion#crypto_key}

---

##### `external_protection_level_options`<sup>Optional</sup> <a name="external_protection_level_options" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.externalProtectionLevelOptions"></a>

```python
external_protection_level_options: GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

external_protection_level_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#external_protection_level_options GoogleKmsCryptoKeyVersion#external_protection_level_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#id GoogleKmsCryptoKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.state"></a>

```python
state: str
```

- *Type:* str

The current state of the CryptoKeyVersion. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#state GoogleKmsCryptoKeyVersion#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionConfig.property.timeouts"></a>

```python
timeouts: GoogleKmsCryptoKeyVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#timeouts GoogleKmsCryptoKeyVersion#timeouts}

---

### GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions <a name="GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions(
  ekm_connection_key_path: str = None,
  external_key_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.ekmConnectionKeyPath">ekm_connection_key_path</a></code> | <code>str</code> | The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.externalKeyUri">external_key_uri</a></code> | <code>str</code> | The URI for an external resource that this CryptoKeyVersion represents. |

---

##### `ekm_connection_key_path`<sup>Optional</sup> <a name="ekm_connection_key_path" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.ekmConnectionKeyPath"></a>

```python
ekm_connection_key_path: str
```

- *Type:* str

The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#ekm_connection_key_path GoogleKmsCryptoKeyVersion#ekm_connection_key_path}

---

##### `external_key_uri`<sup>Optional</sup> <a name="external_key_uri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions.property.externalKeyUri"></a>

```python
external_key_uri: str
```

- *Type:* str

The URI for an external resource that this CryptoKeyVersion represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#external_key_uri GoogleKmsCryptoKeyVersion#external_key_uri}

---

### GoogleKmsCryptoKeyVersionTimeouts <a name="GoogleKmsCryptoKeyVersionTimeouts" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#create GoogleKmsCryptoKeyVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#delete GoogleKmsCryptoKeyVersion#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#update GoogleKmsCryptoKeyVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#create GoogleKmsCryptoKeyVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#delete GoogleKmsCryptoKeyVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_kms_crypto_key_version#update GoogleKmsCryptoKeyVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsCryptoKeyVersionAttestationCertChainsList <a name="GoogleKmsCryptoKeyVersionAttestationCertChainsList" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference <a name="GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.caviumCerts">cavium_certs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googleCardCerts">google_card_certs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googlePartitionCerts">google_partition_certs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains">GoogleKmsCryptoKeyVersionAttestationCertChains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cavium_certs`<sup>Required</sup> <a name="cavium_certs" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.caviumCerts"></a>

```python
cavium_certs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `google_card_certs`<sup>Required</sup> <a name="google_card_certs" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googleCardCerts"></a>

```python
google_card_certs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `google_partition_certs`<sup>Required</sup> <a name="google_partition_certs" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googlePartitionCerts"></a>

```python
google_partition_certs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleKmsCryptoKeyVersionAttestationCertChains
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChains">GoogleKmsCryptoKeyVersionAttestationCertChains</a>

---


### GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList <a name="GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference <a name="GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath">ekm_connection_key_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.externalKeyUri">external_key_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ekm_connection_key_path`<sup>Required</sup> <a name="ekm_connection_key_path" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath"></a>

```python
ekm_connection_key_path: str
```

- *Type:* str

---

##### `external_key_uri`<sup>Required</sup> <a name="external_key_uri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.externalKeyUri"></a>

```python
external_key_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptions</a>

---


### GoogleKmsCryptoKeyVersionAttestationList <a name="GoogleKmsCryptoKeyVersionAttestationList" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleKmsCryptoKeyVersionAttestationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleKmsCryptoKeyVersionAttestationOutputReference <a name="GoogleKmsCryptoKeyVersionAttestationOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.certChains">cert_chains</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList">GoogleKmsCryptoKeyVersionAttestationCertChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.externalProtectionLevelOptions">external_protection_level_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation">GoogleKmsCryptoKeyVersionAttestation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_chains`<sup>Required</sup> <a name="cert_chains" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.certChains"></a>

```python
cert_chains: GoogleKmsCryptoKeyVersionAttestationCertChainsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationCertChainsList">GoogleKmsCryptoKeyVersionAttestationCertChainsList</a>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `external_protection_level_options`<sup>Required</sup> <a name="external_protection_level_options" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.externalProtectionLevelOptions"></a>

```python
external_protection_level_options: GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList">GoogleKmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleKmsCryptoKeyVersionAttestation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionAttestation">GoogleKmsCryptoKeyVersionAttestation</a>

---


### GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference <a name="GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetEkmConnectionKeyPath">reset_ekm_connection_key_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetExternalKeyUri">reset_external_key_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ekm_connection_key_path` <a name="reset_ekm_connection_key_path" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetEkmConnectionKeyPath"></a>

```python
def reset_ekm_connection_key_path() -> None
```

##### `reset_external_key_uri` <a name="reset_external_key_uri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetExternalKeyUri"></a>

```python
def reset_external_key_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPathInput">ekm_connection_key_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUriInput">external_key_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath">ekm_connection_key_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUri">external_key_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ekm_connection_key_path_input`<sup>Optional</sup> <a name="ekm_connection_key_path_input" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPathInput"></a>

```python
ekm_connection_key_path_input: str
```

- *Type:* str

---

##### `external_key_uri_input`<sup>Optional</sup> <a name="external_key_uri_input" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUriInput"></a>

```python
external_key_uri_input: str
```

- *Type:* str

---

##### `ekm_connection_key_path`<sup>Required</sup> <a name="ekm_connection_key_path" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath"></a>

```python
ekm_connection_key_path: str
```

- *Type:* str

---

##### `external_key_uri`<sup>Required</sup> <a name="external_key_uri" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUri"></a>

```python
external_key_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions">GoogleKmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---


### GoogleKmsCryptoKeyVersionTimeoutsOutputReference <a name="GoogleKmsCryptoKeyVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_crypto_key_version

googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleKmsCryptoKeyVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsCryptoKeyVersion.GoogleKmsCryptoKeyVersionTimeouts">GoogleKmsCryptoKeyVersionTimeouts</a>]

---



