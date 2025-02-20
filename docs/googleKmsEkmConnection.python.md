# `googleKmsEkmConnection` Submodule <a name="`googleKmsEkmConnection` Submodule" id="@cdktf/provider-google-beta.googleKmsEkmConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsEkmConnection <a name="GoogleKmsEkmConnection" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection google_kms_ekm_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnection(
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
  service_resolvers: typing.Union[IResolvable, typing.List[GoogleKmsEkmConnectionServiceResolvers]],
  crypto_space_path: str = None,
  etag: str = None,
  id: str = None,
  key_management_mode: str = None,
  project: str = None,
  timeouts: GoogleKmsEkmConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name for the EkmConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.serviceResolvers">service_resolvers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>]]</code> | service_resolvers block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.cryptoSpacePath">crypto_space_path</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Optional. Etag of the currently stored EkmConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#id GoogleKmsEkmConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.keyManagementMode">key_management_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#project GoogleKmsEkmConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.location"></a>

- *Type:* str

The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#location GoogleKmsEkmConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.name"></a>

- *Type:* str

The resource name for the EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#name GoogleKmsEkmConnection#name}

---

##### `service_resolvers`<sup>Required</sup> <a name="service_resolvers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.serviceResolvers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>]]

service_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#service_resolvers GoogleKmsEkmConnection#service_resolvers}

---

##### `crypto_space_path`<sup>Optional</sup> <a name="crypto_space_path" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.cryptoSpacePath"></a>

- *Type:* str

Optional.

Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#crypto_space_path GoogleKmsEkmConnection#crypto_space_path}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.etag"></a>

- *Type:* str

Optional. Etag of the currently stored EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#etag GoogleKmsEkmConnection#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#id GoogleKmsEkmConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_management_mode`<sup>Optional</sup> <a name="key_management_mode" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.keyManagementMode"></a>

- *Type:* str

Optional.

Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL Default value: "MANUAL" Possible values: ["MANUAL", "CLOUD_KMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#key_management_mode GoogleKmsEkmConnection#key_management_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#project GoogleKmsEkmConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#timeouts GoogleKmsEkmConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putServiceResolvers">put_service_resolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetCryptoSpacePath">reset_crypto_space_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetKeyManagementMode">reset_key_management_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_service_resolvers` <a name="put_service_resolvers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putServiceResolvers"></a>

```python
def put_service_resolvers(
  value: typing.Union[IResolvable, typing.List[GoogleKmsEkmConnectionServiceResolvers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putServiceResolvers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#create GoogleKmsEkmConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#delete GoogleKmsEkmConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#update GoogleKmsEkmConnection#update}.

---

##### `reset_crypto_space_path` <a name="reset_crypto_space_path" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetCryptoSpacePath"></a>

```python
def reset_crypto_space_path() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_management_mode` <a name="reset_key_management_mode" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetKeyManagementMode"></a>

```python
def reset_key_management_mode() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleKmsEkmConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleKmsEkmConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleKmsEkmConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleKmsEkmConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsEkmConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.serviceResolvers">service_resolvers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList">GoogleKmsEkmConnectionServiceResolversList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference">GoogleKmsEkmConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cryptoSpacePathInput">crypto_space_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.keyManagementModeInput">key_management_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.serviceResolversInput">service_resolvers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cryptoSpacePath">crypto_space_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.keyManagementMode">key_management_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `service_resolvers`<sup>Required</sup> <a name="service_resolvers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.serviceResolvers"></a>

```python
service_resolvers: GoogleKmsEkmConnectionServiceResolversList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList">GoogleKmsEkmConnectionServiceResolversList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.timeouts"></a>

```python
timeouts: GoogleKmsEkmConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference">GoogleKmsEkmConnectionTimeoutsOutputReference</a>

---

##### `crypto_space_path_input`<sup>Optional</sup> <a name="crypto_space_path_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cryptoSpacePathInput"></a>

```python
crypto_space_path_input: str
```

- *Type:* str

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_management_mode_input`<sup>Optional</sup> <a name="key_management_mode_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.keyManagementModeInput"></a>

```python
key_management_mode_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_resolvers_input`<sup>Optional</sup> <a name="service_resolvers_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.serviceResolversInput"></a>

```python
service_resolvers_input: typing.Union[IResolvable, typing.List[GoogleKmsEkmConnectionServiceResolvers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleKmsEkmConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a>]

---

##### `crypto_space_path`<sup>Required</sup> <a name="crypto_space_path" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.cryptoSpacePath"></a>

```python
crypto_space_path: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_management_mode`<sup>Required</sup> <a name="key_management_mode" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.keyManagementMode"></a>

```python
key_management_mode: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsEkmConnectionConfig <a name="GoogleKmsEkmConnectionConfig" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  service_resolvers: typing.Union[IResolvable, typing.List[GoogleKmsEkmConnectionServiceResolvers]],
  crypto_space_path: str = None,
  etag: str = None,
  id: str = None,
  key_management_mode: str = None,
  project: str = None,
  timeouts: GoogleKmsEkmConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.location">location</a></code> | <code>str</code> | The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.name">name</a></code> | <code>str</code> | The resource name for the EkmConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.serviceResolvers">service_resolvers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>]]</code> | service_resolvers block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.cryptoSpacePath">crypto_space_path</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.etag">etag</a></code> | <code>str</code> | Optional. Etag of the currently stored EkmConnection. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#id GoogleKmsEkmConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.keyManagementMode">key_management_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#project GoogleKmsEkmConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#location GoogleKmsEkmConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name for the EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#name GoogleKmsEkmConnection#name}

---

##### `service_resolvers`<sup>Required</sup> <a name="service_resolvers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.serviceResolvers"></a>

```python
service_resolvers: typing.Union[IResolvable, typing.List[GoogleKmsEkmConnectionServiceResolvers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>]]

service_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#service_resolvers GoogleKmsEkmConnection#service_resolvers}

---

##### `crypto_space_path`<sup>Optional</sup> <a name="crypto_space_path" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.cryptoSpacePath"></a>

```python
crypto_space_path: str
```

- *Type:* str

Optional.

Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#crypto_space_path GoogleKmsEkmConnection#crypto_space_path}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Optional. Etag of the currently stored EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#etag GoogleKmsEkmConnection#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#id GoogleKmsEkmConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_management_mode`<sup>Optional</sup> <a name="key_management_mode" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.keyManagementMode"></a>

```python
key_management_mode: str
```

- *Type:* str

Optional.

Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL Default value: "MANUAL" Possible values: ["MANUAL", "CLOUD_KMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#key_management_mode GoogleKmsEkmConnection#key_management_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#project GoogleKmsEkmConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionConfig.property.timeouts"></a>

```python
timeouts: GoogleKmsEkmConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#timeouts GoogleKmsEkmConnection#timeouts}

---

### GoogleKmsEkmConnectionServiceResolvers <a name="GoogleKmsEkmConnectionServiceResolvers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers(
  hostname: str,
  server_certificates: typing.Union[IResolvable, typing.List[GoogleKmsEkmConnectionServiceResolversServerCertificates]],
  service_directory_service: str,
  endpoint_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.hostname">hostname</a></code> | <code>str</code> | Required. The hostname of the EKM replica used at TLS and HTTP layers. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.serverCertificates">server_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>]]</code> | server_certificates block. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.serviceDirectoryService">service_directory_service</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.endpointFilter">endpoint_filter</a></code> | <code>str</code> | Optional. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Required. The hostname of the EKM replica used at TLS and HTTP layers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#hostname GoogleKmsEkmConnection#hostname}

---

##### `server_certificates`<sup>Required</sup> <a name="server_certificates" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.serverCertificates"></a>

```python
server_certificates: typing.Union[IResolvable, typing.List[GoogleKmsEkmConnectionServiceResolversServerCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>]]

server_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#server_certificates GoogleKmsEkmConnection#server_certificates}

---

##### `service_directory_service`<sup>Required</sup> <a name="service_directory_service" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.serviceDirectoryService"></a>

```python
service_directory_service: str
```

- *Type:* str

Required.

The resource name of the Service Directory service pointing to an EKM replica, in the format projects/* /locations/* /namespaces/* /services/*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#service_directory_service GoogleKmsEkmConnection#service_directory_service}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `endpoint_filter`<sup>Optional</sup> <a name="endpoint_filter" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers.property.endpointFilter"></a>

```python
endpoint_filter: str
```

- *Type:* str

Optional.

The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#endpoint_filter GoogleKmsEkmConnection#endpoint_filter}

---

### GoogleKmsEkmConnectionServiceResolversServerCertificates <a name="GoogleKmsEkmConnectionServiceResolversServerCertificates" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates(
  raw_der: str,
  subject_alternative_dns_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates.property.rawDer">raw_der</a></code> | <code>str</code> | Required. The raw certificate bytes in DER format. A base64-encoded string. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates.property.subjectAlternativeDnsNames">subject_alternative_dns_names</a></code> | <code>typing.List[str]</code> | Output only. The subject Alternative DNS names. Only present if parsed is true. |

---

##### `raw_der`<sup>Required</sup> <a name="raw_der" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates.property.rawDer"></a>

```python
raw_der: str
```

- *Type:* str

Required. The raw certificate bytes in DER format. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#raw_der GoogleKmsEkmConnection#raw_der}

---

##### `subject_alternative_dns_names`<sup>Optional</sup> <a name="subject_alternative_dns_names" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates.property.subjectAlternativeDnsNames"></a>

```python
subject_alternative_dns_names: typing.List[str]
```

- *Type:* typing.List[str]

Output only. The subject Alternative DNS names. Only present if parsed is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#subject_alternative_dns_names GoogleKmsEkmConnection#subject_alternative_dns_names}

---

### GoogleKmsEkmConnectionTimeouts <a name="GoogleKmsEkmConnectionTimeouts" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#create GoogleKmsEkmConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#delete GoogleKmsEkmConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#update GoogleKmsEkmConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#create GoogleKmsEkmConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#delete GoogleKmsEkmConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_kms_ekm_connection#update GoogleKmsEkmConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsEkmConnectionServiceResolversList <a name="GoogleKmsEkmConnectionServiceResolversList" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleKmsEkmConnectionServiceResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleKmsEkmConnectionServiceResolvers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>]]

---


### GoogleKmsEkmConnectionServiceResolversOutputReference <a name="GoogleKmsEkmConnectionServiceResolversOutputReference" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.putServerCertificates">put_server_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.resetEndpointFilter">reset_endpoint_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_server_certificates` <a name="put_server_certificates" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.putServerCertificates"></a>

```python
def put_server_certificates(
  value: typing.Union[IResolvable, typing.List[GoogleKmsEkmConnectionServiceResolversServerCertificates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.putServerCertificates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>]]

---

##### `reset_endpoint_filter` <a name="reset_endpoint_filter" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.resetEndpointFilter"></a>

```python
def reset_endpoint_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serverCertificates">server_certificates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList">GoogleKmsEkmConnectionServiceResolversServerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.endpointFilterInput">endpoint_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serverCertificatesInput">server_certificates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryServiceInput">service_directory_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.endpointFilter">endpoint_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryService">service_directory_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_certificates`<sup>Required</sup> <a name="server_certificates" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serverCertificates"></a>

```python
server_certificates: GoogleKmsEkmConnectionServiceResolversServerCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList">GoogleKmsEkmConnectionServiceResolversServerCertificatesList</a>

---

##### `endpoint_filter_input`<sup>Optional</sup> <a name="endpoint_filter_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.endpointFilterInput"></a>

```python
endpoint_filter_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `server_certificates_input`<sup>Optional</sup> <a name="server_certificates_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serverCertificatesInput"></a>

```python
server_certificates_input: typing.Union[IResolvable, typing.List[GoogleKmsEkmConnectionServiceResolversServerCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>]]

---

##### `service_directory_service_input`<sup>Optional</sup> <a name="service_directory_service_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryServiceInput"></a>

```python
service_directory_service_input: str
```

- *Type:* str

---

##### `endpoint_filter`<sup>Required</sup> <a name="endpoint_filter" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.endpointFilter"></a>

```python
endpoint_filter: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `service_directory_service`<sup>Required</sup> <a name="service_directory_service" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryService"></a>

```python
service_directory_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleKmsEkmConnectionServiceResolvers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolvers">GoogleKmsEkmConnectionServiceResolvers</a>]

---


### GoogleKmsEkmConnectionServiceResolversServerCertificatesList <a name="GoogleKmsEkmConnectionServiceResolversServerCertificatesList" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleKmsEkmConnectionServiceResolversServerCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>]]

---


### GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference <a name="GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.resetSubjectAlternativeDnsNames">reset_subject_alternative_dns_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subject_alternative_dns_names` <a name="reset_subject_alternative_dns_names" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.resetSubjectAlternativeDnsNames"></a>

```python
def reset_subject_alternative_dns_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notAfterTime">not_after_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notBeforeTime">not_before_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.parsed">parsed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.sha256Fingerprint">sha256_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDerInput">raw_der_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNamesInput">subject_alternative_dns_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDer">raw_der</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNames">subject_alternative_dns_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `not_after_time`<sup>Required</sup> <a name="not_after_time" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notAfterTime"></a>

```python
not_after_time: str
```

- *Type:* str

---

##### `not_before_time`<sup>Required</sup> <a name="not_before_time" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notBeforeTime"></a>

```python
not_before_time: str
```

- *Type:* str

---

##### `parsed`<sup>Required</sup> <a name="parsed" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.parsed"></a>

```python
parsed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `sha256_fingerprint`<sup>Required</sup> <a name="sha256_fingerprint" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.sha256Fingerprint"></a>

```python
sha256_fingerprint: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `raw_der_input`<sup>Optional</sup> <a name="raw_der_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDerInput"></a>

```python
raw_der_input: str
```

- *Type:* str

---

##### `subject_alternative_dns_names_input`<sup>Optional</sup> <a name="subject_alternative_dns_names_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNamesInput"></a>

```python
subject_alternative_dns_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `raw_der`<sup>Required</sup> <a name="raw_der" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDer"></a>

```python
raw_der: str
```

- *Type:* str

---

##### `subject_alternative_dns_names`<sup>Required</sup> <a name="subject_alternative_dns_names" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNames"></a>

```python
subject_alternative_dns_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleKmsEkmConnectionServiceResolversServerCertificates]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionServiceResolversServerCertificates">GoogleKmsEkmConnectionServiceResolversServerCertificates</a>]

---


### GoogleKmsEkmConnectionTimeoutsOutputReference <a name="GoogleKmsEkmConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_kms_ekm_connection

googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleKmsEkmConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleKmsEkmConnection.GoogleKmsEkmConnectionTimeouts">GoogleKmsEkmConnectionTimeouts</a>]

---



