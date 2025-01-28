# `googleSecureSourceManagerInstance` Submodule <a name="`googleSecureSourceManagerInstance` Submodule" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecureSourceManagerInstance <a name="GoogleSecureSourceManagerInstance" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance google_secure_source_manager_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  location: str,
  id: str = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  private_config: GoogleSecureSourceManagerInstancePrivateConfig = None,
  project: str = None,
  timeouts: GoogleSecureSourceManagerInstanceTimeouts = None,
  workforce_identity_federation_config: GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The name for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#id GoogleSecureSourceManagerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.privateConfig">private_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a></code> | private_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#project GoogleSecureSourceManagerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.workforceIdentityFederationConfig">workforce_identity_federation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | workforce_identity_federation_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.instanceId"></a>

- *Type:* str

The name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#instance_id GoogleSecureSourceManagerInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.location"></a>

- *Type:* str

The location for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#location GoogleSecureSourceManagerInstance#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#id GoogleSecureSourceManagerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.kmsKey"></a>

- *Type:* str

Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#kms_key GoogleSecureSourceManagerInstance#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#labels GoogleSecureSourceManagerInstance#labels}

---

##### `private_config`<sup>Optional</sup> <a name="private_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.privateConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

private_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#private_config GoogleSecureSourceManagerInstance#private_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#project GoogleSecureSourceManagerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#timeouts GoogleSecureSourceManagerInstance#timeouts}

---

##### `workforce_identity_federation_config`<sup>Optional</sup> <a name="workforce_identity_federation_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.Initializer.parameter.workforceIdentityFederationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

workforce_identity_federation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#workforce_identity_federation_config GoogleSecureSourceManagerInstance#workforce_identity_federation_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putPrivateConfig">put_private_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putWorkforceIdentityFederationConfig">put_workforce_identity_federation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetPrivateConfig">reset_private_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetWorkforceIdentityFederationConfig">reset_workforce_identity_federation_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_private_config` <a name="put_private_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putPrivateConfig"></a>

```python
def put_private_config(
  ca_pool: str,
  is_private: typing.Union[bool, IResolvable]
) -> None
```

###### `ca_pool`<sup>Required</sup> <a name="ca_pool" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putPrivateConfig.parameter.caPool"></a>

- *Type:* str

CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#ca_pool GoogleSecureSourceManagerInstance#ca_pool}

---

###### `is_private`<sup>Required</sup> <a name="is_private" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putPrivateConfig.parameter.isPrivate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

'Indicate if it's private instance.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#is_private GoogleSecureSourceManagerInstance#is_private}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#create GoogleSecureSourceManagerInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#delete GoogleSecureSourceManagerInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#update GoogleSecureSourceManagerInstance#update}.

---

##### `put_workforce_identity_federation_config` <a name="put_workforce_identity_federation_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putWorkforceIdentityFederationConfig"></a>

```python
def put_workforce_identity_federation_config(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.putWorkforceIdentityFederationConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

'Whether Workforce Identity Federation is enabled.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#enabled GoogleSecureSourceManagerInstance#enabled}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_private_config` <a name="reset_private_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetPrivateConfig"></a>

```python
def reset_private_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_workforce_identity_federation_config` <a name="reset_workforce_identity_federation_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.resetWorkforceIdentityFederationConfig"></a>

```python
def reset_workforce_identity_federation_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSecureSourceManagerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSecureSourceManagerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSecureSourceManagerInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSecureSourceManagerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecureSourceManagerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.hostConfig">host_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList">GoogleSecureSourceManagerInstanceHostConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfig">private_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference">GoogleSecureSourceManagerInstancePrivateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.stateNote">state_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference">GoogleSecureSourceManagerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfig">workforce_identity_federation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfigInput">private_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfigInput">workforce_identity_federation_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `host_config`<sup>Required</sup> <a name="host_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.hostConfig"></a>

```python
host_config: GoogleSecureSourceManagerInstanceHostConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList">GoogleSecureSourceManagerInstanceHostConfigList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_config`<sup>Required</sup> <a name="private_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfig"></a>

```python
private_config: GoogleSecureSourceManagerInstancePrivateConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference">GoogleSecureSourceManagerInstancePrivateConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_note`<sup>Required</sup> <a name="state_note" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.stateNote"></a>

```python
state_note: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeouts"></a>

```python
timeouts: GoogleSecureSourceManagerInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference">GoogleSecureSourceManagerInstanceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workforce_identity_federation_config`<sup>Required</sup> <a name="workforce_identity_federation_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfig"></a>

```python
workforce_identity_federation_config: GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `private_config_input`<sup>Optional</sup> <a name="private_config_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.privateConfigInput"></a>

```python
private_config_input: GoogleSecureSourceManagerInstancePrivateConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSecureSourceManagerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>]

---

##### `workforce_identity_federation_config_input`<sup>Optional</sup> <a name="workforce_identity_federation_config_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.workforceIdentityFederationConfigInput"></a>

```python
workforce_identity_federation_config_input: GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecureSourceManagerInstanceConfig <a name="GoogleSecureSourceManagerInstanceConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  location: str,
  id: str = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  private_config: GoogleSecureSourceManagerInstancePrivateConfig = None,
  project: str = None,
  timeouts: GoogleSecureSourceManagerInstanceTimeouts = None,
  workforce_identity_federation_config: GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The name for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.location">location</a></code> | <code>str</code> | The location for the Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#id GoogleSecureSourceManagerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.privateConfig">private_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a></code> | private_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#project GoogleSecureSourceManagerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig">workforce_identity_federation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | workforce_identity_federation_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#instance_id GoogleSecureSourceManagerInstance#instance_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#location GoogleSecureSourceManagerInstance#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#id GoogleSecureSourceManagerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#kms_key GoogleSecureSourceManagerInstance#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#labels GoogleSecureSourceManagerInstance#labels}

---

##### `private_config`<sup>Optional</sup> <a name="private_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.privateConfig"></a>

```python
private_config: GoogleSecureSourceManagerInstancePrivateConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

private_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#private_config GoogleSecureSourceManagerInstance#private_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#project GoogleSecureSourceManagerInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleSecureSourceManagerInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#timeouts GoogleSecureSourceManagerInstance#timeouts}

---

##### `workforce_identity_federation_config`<sup>Optional</sup> <a name="workforce_identity_federation_config" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceConfig.property.workforceIdentityFederationConfig"></a>

```python
workforce_identity_federation_config: GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

workforce_identity_federation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#workforce_identity_federation_config GoogleSecureSourceManagerInstance#workforce_identity_federation_config}

---

### GoogleSecureSourceManagerInstanceHostConfig <a name="GoogleSecureSourceManagerInstanceHostConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig()
```


### GoogleSecureSourceManagerInstancePrivateConfig <a name="GoogleSecureSourceManagerInstancePrivateConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig(
  ca_pool: str,
  is_private: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.caPool">ca_pool</a></code> | <code>str</code> | CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.isPrivate">is_private</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | 'Indicate if it's private instance.'. |

---

##### `ca_pool`<sup>Required</sup> <a name="ca_pool" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.caPool"></a>

```python
ca_pool: str
```

- *Type:* str

CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#ca_pool GoogleSecureSourceManagerInstance#ca_pool}

---

##### `is_private`<sup>Required</sup> <a name="is_private" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig.property.isPrivate"></a>

```python
is_private: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

'Indicate if it's private instance.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#is_private GoogleSecureSourceManagerInstance#is_private}

---

### GoogleSecureSourceManagerInstanceTimeouts <a name="GoogleSecureSourceManagerInstanceTimeouts" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#create GoogleSecureSourceManagerInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#delete GoogleSecureSourceManagerInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#update GoogleSecureSourceManagerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#create GoogleSecureSourceManagerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#delete GoogleSecureSourceManagerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#update GoogleSecureSourceManagerInstance#update}.

---

### GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig <a name="GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | 'Whether Workforce Identity Federation is enabled.'. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

'Whether Workforce Identity Federation is enabled.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_secure_source_manager_instance#enabled GoogleSecureSourceManagerInstance#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecureSourceManagerInstanceHostConfigList <a name="GoogleSecureSourceManagerInstanceHostConfigList" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleSecureSourceManagerInstanceHostConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleSecureSourceManagerInstanceHostConfigOutputReference <a name="GoogleSecureSourceManagerInstanceHostConfigOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp">git_http</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh">git_ssh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.html">html</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig">GoogleSecureSourceManagerInstanceHostConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `git_http`<sup>Required</sup> <a name="git_http" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitHttp"></a>

```python
git_http: str
```

- *Type:* str

---

##### `git_ssh`<sup>Required</sup> <a name="git_ssh" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.gitSsh"></a>

```python
git_ssh: str
```

- *Type:* str

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.html"></a>

```python
html: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecureSourceManagerInstanceHostConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceHostConfig">GoogleSecureSourceManagerInstanceHostConfig</a>

---


### GoogleSecureSourceManagerInstancePrivateConfigOutputReference <a name="GoogleSecureSourceManagerInstancePrivateConfigOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment">http_service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment">ssh_service_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput">ca_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput">is_private_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPool">ca_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate">is_private</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_service_attachment`<sup>Required</sup> <a name="http_service_attachment" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.httpServiceAttachment"></a>

```python
http_service_attachment: str
```

- *Type:* str

---

##### `ssh_service_attachment`<sup>Required</sup> <a name="ssh_service_attachment" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.sshServiceAttachment"></a>

```python
ssh_service_attachment: str
```

- *Type:* str

---

##### `ca_pool_input`<sup>Optional</sup> <a name="ca_pool_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPoolInput"></a>

```python
ca_pool_input: str
```

- *Type:* str

---

##### `is_private_input`<sup>Optional</sup> <a name="is_private_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivateInput"></a>

```python
is_private_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ca_pool`<sup>Required</sup> <a name="ca_pool" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.caPool"></a>

```python
ca_pool: str
```

- *Type:* str

---

##### `is_private`<sup>Required</sup> <a name="is_private" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.isPrivate"></a>

```python
is_private: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecureSourceManagerInstancePrivateConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstancePrivateConfig">GoogleSecureSourceManagerInstancePrivateConfig</a>

---


### GoogleSecureSourceManagerInstanceTimeoutsOutputReference <a name="GoogleSecureSourceManagerInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSecureSourceManagerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceTimeouts">GoogleSecureSourceManagerInstanceTimeouts</a>]

---


### GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference <a name="GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_secure_source_manager_instance

googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecureSourceManagerInstance.GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig">GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig</a>

---



