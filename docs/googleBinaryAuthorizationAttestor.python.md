# `googleBinaryAuthorizationAttestor` Submodule <a name="`googleBinaryAuthorizationAttestor` Submodule" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBinaryAuthorizationAttestor <a name="GoogleBinaryAuthorizationAttestor" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor google_binary_authorization_attestor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestation_authority_note: GoogleBinaryAuthorizationAttestorAttestationAuthorityNote,
  name: str,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBinaryAuthorizationAttestorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.attestationAuthorityNote">attestation_authority_note</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote">GoogleBinaryAuthorizationAttestorAttestationAuthorityNote</a></code> | attestation_authority_note block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.description">description</a></code> | <code>str</code> | A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#id GoogleBinaryAuthorizationAttestor#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#project GoogleBinaryAuthorizationAttestor#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts">GoogleBinaryAuthorizationAttestorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation_authority_note`<sup>Required</sup> <a name="attestation_authority_note" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.attestationAuthorityNote"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote">GoogleBinaryAuthorizationAttestorAttestationAuthorityNote</a>

attestation_authority_note block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#attestation_authority_note GoogleBinaryAuthorizationAttestor#attestation_authority_note}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.name"></a>

- *Type:* str

The resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#name GoogleBinaryAuthorizationAttestor#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.description"></a>

- *Type:* str

A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#description GoogleBinaryAuthorizationAttestor#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#id GoogleBinaryAuthorizationAttestor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#project GoogleBinaryAuthorizationAttestor#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts">GoogleBinaryAuthorizationAttestorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#timeouts GoogleBinaryAuthorizationAttestor#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.putAttestationAuthorityNote">put_attestation_authority_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attestation_authority_note` <a name="put_attestation_authority_note" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.putAttestationAuthorityNote"></a>

```python
def put_attestation_authority_note(
  note_reference: str,
  public_keys: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys]] = None
) -> None
```

###### `note_reference`<sup>Required</sup> <a name="note_reference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.putAttestationAuthorityNote.parameter.noteReference"></a>

- *Type:* str

The resource name of a ATTESTATION_AUTHORITY Note, created by the user.

If the Note is in a different project from the Attestor, it
should be specified in the format 'projects/* /notes/*' (or the legacy
'providers/* /notes/*'). This field may not be updated.
An attestation by this attestor is stored as a Container Analysis
ATTESTATION_AUTHORITY Occurrence that names a container image
and that links to this Note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#note_reference GoogleBinaryAuthorizationAttestor#note_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

###### `public_keys`<sup>Optional</sup> <a name="public_keys" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.putAttestationAuthorityNote.parameter.publicKeys"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys</a>]]

public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#public_keys GoogleBinaryAuthorizationAttestor#public_keys}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#create GoogleBinaryAuthorizationAttestor#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#delete GoogleBinaryAuthorizationAttestor#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#update GoogleBinaryAuthorizationAttestor#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBinaryAuthorizationAttestor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBinaryAuthorizationAttestor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBinaryAuthorizationAttestor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBinaryAuthorizationAttestor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBinaryAuthorizationAttestor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.attestationAuthorityNote">attestation_authority_note</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference">GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference">GoogleBinaryAuthorizationAttestorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.attestationAuthorityNoteInput">attestation_authority_note_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote">GoogleBinaryAuthorizationAttestorAttestationAuthorityNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts">GoogleBinaryAuthorizationAttestorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation_authority_note`<sup>Required</sup> <a name="attestation_authority_note" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.attestationAuthorityNote"></a>

```python
attestation_authority_note: GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference">GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.timeouts"></a>

```python
timeouts: GoogleBinaryAuthorizationAttestorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference">GoogleBinaryAuthorizationAttestorTimeoutsOutputReference</a>

---

##### `attestation_authority_note_input`<sup>Optional</sup> <a name="attestation_authority_note_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.attestationAuthorityNoteInput"></a>

```python
attestation_authority_note_input: GoogleBinaryAuthorizationAttestorAttestationAuthorityNote
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote">GoogleBinaryAuthorizationAttestorAttestationAuthorityNote</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBinaryAuthorizationAttestorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts">GoogleBinaryAuthorizationAttestorTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBinaryAuthorizationAttestorAttestationAuthorityNote <a name="GoogleBinaryAuthorizationAttestorAttestationAuthorityNote" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote(
  note_reference: str,
  public_keys: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote.property.noteReference">note_reference</a></code> | <code>str</code> | The resource name of a ATTESTATION_AUTHORITY Note, created by the user. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote.property.publicKeys">public_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys</a>]]</code> | public_keys block. |

---

##### `note_reference`<sup>Required</sup> <a name="note_reference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote.property.noteReference"></a>

```python
note_reference: str
```

- *Type:* str

The resource name of a ATTESTATION_AUTHORITY Note, created by the user.

If the Note is in a different project from the Attestor, it
should be specified in the format 'projects/* /notes/*' (or the legacy
'providers/* /notes/*'). This field may not be updated.
An attestation by this attestor is stored as a Container Analysis
ATTESTATION_AUTHORITY Occurrence that names a container image
and that links to this Note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#note_reference GoogleBinaryAuthorizationAttestor#note_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `public_keys`<sup>Optional</sup> <a name="public_keys" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote.property.publicKeys"></a>

```python
public_keys: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys</a>]]

public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#public_keys GoogleBinaryAuthorizationAttestor#public_keys}

---

### GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys <a name="GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys(
  ascii_armored_pgp_public_key: str = None,
  comment: str = None,
  id: str = None,
  pkix_public_key: GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.asciiArmoredPgpPublicKey">ascii_armored_pgp_public_key</a></code> | <code>str</code> | ASCII-armored representation of a PGP public key, as the entire output by the command 'gpg --export --armor foo@example.com' (either LF or CRLF line endings). When using this field, id should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If id is provided by the caller, it will be overwritten by the API-calculated ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.comment">comment</a></code> | <code>str</code> | A descriptive comment. This field may be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.id">id</a></code> | <code>str</code> | The ID of this public key. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.pkixPublicKey">pkix_public_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a></code> | pkix_public_key block. |

---

##### `ascii_armored_pgp_public_key`<sup>Optional</sup> <a name="ascii_armored_pgp_public_key" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.asciiArmoredPgpPublicKey"></a>

```python
ascii_armored_pgp_public_key: str
```

- *Type:* str

ASCII-armored representation of a PGP public key, as the entire output by the command 'gpg --export --armor foo@example.com' (either LF or CRLF line endings). When using this field, id should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If id is provided by the caller, it will be overwritten by the API-calculated ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#ascii_armored_pgp_public_key GoogleBinaryAuthorizationAttestor#ascii_armored_pgp_public_key}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.comment"></a>

```python
comment: str
```

- *Type:* str

A descriptive comment. This field may be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#comment GoogleBinaryAuthorizationAttestor#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of this public key.

Signatures verified by BinAuthz
must include the ID of the public key that can be used to
verify them, and that ID must match the contents of this
field exactly. Additional restrictions on this field can
be imposed based on which public key type is encapsulated.
See the documentation on publicKey cases below for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#id GoogleBinaryAuthorizationAttestor#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pkix_public_key`<sup>Optional</sup> <a name="pkix_public_key" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys.property.pkixPublicKey"></a>

```python
pkix_public_key: GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a>

pkix_public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#pkix_public_key GoogleBinaryAuthorizationAttestor#pkix_public_key}

---

### GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey <a name="GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey(
  public_key_pem: str = None,
  signature_algorithm: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.publicKeyPem">public_key_pem</a></code> | <code>str</code> | A PEM-encoded public key, as described in 'https://tools.ietf.org/html/rfc7468#section-13'. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | The signature algorithm used to verify a message against a signature using this key. |

---

##### `public_key_pem`<sup>Optional</sup> <a name="public_key_pem" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.publicKeyPem"></a>

```python
public_key_pem: str
```

- *Type:* str

A PEM-encoded public key, as described in 'https://tools.ietf.org/html/rfc7468#section-13'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#public_key_pem GoogleBinaryAuthorizationAttestor#public_key_pem}

---

##### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

The signature algorithm used to verify a message against a signature using this key.

These signature algorithm must
match the structure and any object identifiers encoded in
publicKeyPem (i.e. this algorithm must match that of the
public key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#signature_algorithm GoogleBinaryAuthorizationAttestor#signature_algorithm}

---

### GoogleBinaryAuthorizationAttestorConfig <a name="GoogleBinaryAuthorizationAttestorConfig" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestation_authority_note: GoogleBinaryAuthorizationAttestorAttestationAuthorityNote,
  name: str,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBinaryAuthorizationAttestorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.attestationAuthorityNote">attestation_authority_note</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote">GoogleBinaryAuthorizationAttestorAttestationAuthorityNote</a></code> | attestation_authority_note block. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.name">name</a></code> | <code>str</code> | The resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.description">description</a></code> | <code>str</code> | A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#id GoogleBinaryAuthorizationAttestor#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#project GoogleBinaryAuthorizationAttestor#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts">GoogleBinaryAuthorizationAttestorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation_authority_note`<sup>Required</sup> <a name="attestation_authority_note" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.attestationAuthorityNote"></a>

```python
attestation_authority_note: GoogleBinaryAuthorizationAttestorAttestationAuthorityNote
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote">GoogleBinaryAuthorizationAttestorAttestationAuthorityNote</a>

attestation_authority_note block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#attestation_authority_note GoogleBinaryAuthorizationAttestor#attestation_authority_note}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#name GoogleBinaryAuthorizationAttestor#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#description GoogleBinaryAuthorizationAttestor#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#id GoogleBinaryAuthorizationAttestor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#project GoogleBinaryAuthorizationAttestor#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorConfig.property.timeouts"></a>

```python
timeouts: GoogleBinaryAuthorizationAttestorTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts">GoogleBinaryAuthorizationAttestorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#timeouts GoogleBinaryAuthorizationAttestor#timeouts}

---

### GoogleBinaryAuthorizationAttestorTimeouts <a name="GoogleBinaryAuthorizationAttestorTimeouts" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#create GoogleBinaryAuthorizationAttestor#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#delete GoogleBinaryAuthorizationAttestor#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#update GoogleBinaryAuthorizationAttestor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#create GoogleBinaryAuthorizationAttestor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#delete GoogleBinaryAuthorizationAttestor#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#update GoogleBinaryAuthorizationAttestor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference <a name="GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.putPublicKeys">put_public_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resetPublicKeys">reset_public_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_public_keys` <a name="put_public_keys" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.putPublicKeys"></a>

```python
def put_public_keys(
  value: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.putPublicKeys.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys</a>]]

---

##### `reset_public_keys` <a name="reset_public_keys" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.resetPublicKeys"></a>

```python
def reset_public_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.delegationServiceAccountEmail">delegation_service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeys">public_keys</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReferenceInput">note_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeysInput">public_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReference">note_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote">GoogleBinaryAuthorizationAttestorAttestationAuthorityNote</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delegation_service_account_email`<sup>Required</sup> <a name="delegation_service_account_email" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.delegationServiceAccountEmail"></a>

```python
delegation_service_account_email: str
```

- *Type:* str

---

##### `public_keys`<sup>Required</sup> <a name="public_keys" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeys"></a>

```python
public_keys: GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList</a>

---

##### `note_reference_input`<sup>Optional</sup> <a name="note_reference_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReferenceInput"></a>

```python
note_reference_input: str
```

- *Type:* str

---

##### `public_keys_input`<sup>Optional</sup> <a name="public_keys_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.publicKeysInput"></a>

```python
public_keys_input: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys</a>]]

---

##### `note_reference`<sup>Required</sup> <a name="note_reference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.noteReference"></a>

```python
note_reference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBinaryAuthorizationAttestorAttestationAuthorityNote
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNote">GoogleBinaryAuthorizationAttestorAttestationAuthorityNote</a>

---


### GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList <a name="GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys</a>]]

---


### GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference <a name="GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.putPkixPublicKey">put_pkix_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetAsciiArmoredPgpPublicKey">reset_ascii_armored_pgp_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetPkixPublicKey">reset_pkix_public_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pkix_public_key` <a name="put_pkix_public_key" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.putPkixPublicKey"></a>

```python
def put_pkix_public_key(
  public_key_pem: str = None,
  signature_algorithm: str = None
) -> None
```

###### `public_key_pem`<sup>Optional</sup> <a name="public_key_pem" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.putPkixPublicKey.parameter.publicKeyPem"></a>

- *Type:* str

A PEM-encoded public key, as described in 'https://tools.ietf.org/html/rfc7468#section-13'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#public_key_pem GoogleBinaryAuthorizationAttestor#public_key_pem}

---

###### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.putPkixPublicKey.parameter.signatureAlgorithm"></a>

- *Type:* str

The signature algorithm used to verify a message against a signature using this key.

These signature algorithm must
match the structure and any object identifiers encoded in
publicKeyPem (i.e. this algorithm must match that of the
public key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_binary_authorization_attestor#signature_algorithm GoogleBinaryAuthorizationAttestor#signature_algorithm}

---

##### `reset_ascii_armored_pgp_public_key` <a name="reset_ascii_armored_pgp_public_key" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetAsciiArmoredPgpPublicKey"></a>

```python
def reset_ascii_armored_pgp_public_key() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pkix_public_key` <a name="reset_pkix_public_key" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.resetPkixPublicKey"></a>

```python
def reset_pkix_public_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKey">pkix_public_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKeyInput">ascii_armored_pgp_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKeyInput">pkix_public_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKey">ascii_armored_pgp_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pkix_public_key`<sup>Required</sup> <a name="pkix_public_key" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKey"></a>

```python
pkix_public_key: GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference</a>

---

##### `ascii_armored_pgp_public_key_input`<sup>Optional</sup> <a name="ascii_armored_pgp_public_key_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKeyInput"></a>

```python
ascii_armored_pgp_public_key_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pkix_public_key_input`<sup>Optional</sup> <a name="pkix_public_key_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.pkixPublicKeyInput"></a>

```python
pkix_public_key_input: GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a>

---

##### `ascii_armored_pgp_public_key`<sup>Required</sup> <a name="ascii_armored_pgp_public_key" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.asciiArmoredPgpPublicKey"></a>

```python
ascii_armored_pgp_public_key: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys</a>]

---


### GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference <a name="GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resetPublicKeyPem">reset_public_key_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resetSignatureAlgorithm">reset_signature_algorithm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_public_key_pem` <a name="reset_public_key_pem" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resetPublicKeyPem"></a>

```python
def reset_public_key_pem() -> None
```

##### `reset_signature_algorithm` <a name="reset_signature_algorithm" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.resetSignatureAlgorithm"></a>

```python
def reset_signature_algorithm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPemInput">public_key_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithmInput">signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPem">public_key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key_pem_input`<sup>Optional</sup> <a name="public_key_pem_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPemInput"></a>

```python
public_key_pem_input: str
```

- *Type:* str

---

##### `signature_algorithm_input`<sup>Optional</sup> <a name="signature_algorithm_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithmInput"></a>

```python
signature_algorithm_input: str
```

- *Type:* str

---

##### `public_key_pem`<sup>Required</sup> <a name="public_key_pem" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.publicKeyPem"></a>

```python
public_key_pem: str
```

- *Type:* str

---

##### `signature_algorithm`<sup>Required</sup> <a name="signature_algorithm" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey">GoogleBinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey</a>

---


### GoogleBinaryAuthorizationAttestorTimeoutsOutputReference <a name="GoogleBinaryAuthorizationAttestorTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_binary_authorization_attestor

googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts">GoogleBinaryAuthorizationAttestorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBinaryAuthorizationAttestorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBinaryAuthorizationAttestor.GoogleBinaryAuthorizationAttestorTimeouts">GoogleBinaryAuthorizationAttestorTimeouts</a>]

---



