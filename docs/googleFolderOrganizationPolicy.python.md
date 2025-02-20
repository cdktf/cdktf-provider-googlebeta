# `googleFolderOrganizationPolicy` Submodule <a name="`googleFolderOrganizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFolderOrganizationPolicy <a name="GoogleFolderOrganizationPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy google_folder_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  constraint: str,
  folder: str,
  boolean_policy: GoogleFolderOrganizationPolicyBooleanPolicy = None,
  id: str = None,
  list_policy: GoogleFolderOrganizationPolicyListPolicy = None,
  restore_policy: GoogleFolderOrganizationPolicyRestorePolicy = None,
  timeouts: GoogleFolderOrganizationPolicyTimeouts = None,
  version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The resource name of the folder to set the policy for. Its format is folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the Policy. Default version is 0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.constraint"></a>

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#constraint GoogleFolderOrganizationPolicy#constraint}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.folder"></a>

- *Type:* str

The resource name of the folder to set the policy for. Its format is folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#folder GoogleFolderOrganizationPolicy#folder}

---

##### `boolean_policy`<sup>Optional</sup> <a name="boolean_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.booleanPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#boolean_policy GoogleFolderOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `list_policy`<sup>Optional</sup> <a name="list_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.listPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#list_policy GoogleFolderOrganizationPolicy#list_policy}

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.restorePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#restore_policy GoogleFolderOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#timeouts GoogleFolderOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#version GoogleFolderOrganizationPolicy#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy">put_boolean_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy">put_list_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy">put_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetBooleanPolicy">reset_boolean_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetListPolicy">reset_list_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetRestorePolicy">reset_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_boolean_policy` <a name="put_boolean_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy"></a>

```python
def put_boolean_policy(
  enforced: typing.Union[bool, IResolvable]
) -> None
```

###### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy.parameter.enforced"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#enforced GoogleFolderOrganizationPolicy#enforced}

---

##### `put_list_policy` <a name="put_list_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy"></a>

```python
def put_list_policy(
  allow: GoogleFolderOrganizationPolicyListPolicyAllow = None,
  deny: GoogleFolderOrganizationPolicyListPolicyDeny = None,
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  suggested_value: str = None
) -> None
```

###### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy.parameter.allow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#allow GoogleFolderOrganizationPolicy#allow}

---

###### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy.parameter.deny"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#deny GoogleFolderOrganizationPolicy#deny}

---

###### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy.parameter.inheritFromParent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#inherit_from_parent GoogleFolderOrganizationPolicy#inherit_from_parent}

---

###### `suggested_value`<sup>Optional</sup> <a name="suggested_value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy.parameter.suggestedValue"></a>

- *Type:* str

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#suggested_value GoogleFolderOrganizationPolicy#suggested_value}

---

##### `put_restore_policy` <a name="put_restore_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy"></a>

```python
def put_restore_policy(
  default: typing.Union[bool, IResolvable]
) -> None
```

###### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy.parameter.default"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#default GoogleFolderOrganizationPolicy#default}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#create GoogleFolderOrganizationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#delete GoogleFolderOrganizationPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#read GoogleFolderOrganizationPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#update GoogleFolderOrganizationPolicy#update}.

---

##### `reset_boolean_policy` <a name="reset_boolean_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetBooleanPolicy"></a>

```python
def reset_boolean_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_list_policy` <a name="reset_list_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetListPolicy"></a>

```python
def reset_list_policy() -> None
```

##### `reset_restore_policy` <a name="reset_restore_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetRestorePolicy"></a>

```python
def reset_restore_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleFolderOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleFolderOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFolderOrganizationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFolderOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFolderOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference">GoogleFolderOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference">GoogleFolderOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference">GoogleFolderOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference">GoogleFolderOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicyInput">boolean_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicyInput">list_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicyInput">restore_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `boolean_policy`<sup>Required</sup> <a name="boolean_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicy"></a>

```python
boolean_policy: GoogleFolderOrganizationPolicyBooleanPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference">GoogleFolderOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `list_policy`<sup>Required</sup> <a name="list_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicy"></a>

```python
list_policy: GoogleFolderOrganizationPolicyListPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference">GoogleFolderOrganizationPolicyListPolicyOutputReference</a>

---

##### `restore_policy`<sup>Required</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicy"></a>

```python
restore_policy: GoogleFolderOrganizationPolicyRestorePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference">GoogleFolderOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeouts"></a>

```python
timeouts: GoogleFolderOrganizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference">GoogleFolderOrganizationPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `boolean_policy_input`<sup>Optional</sup> <a name="boolean_policy_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicyInput"></a>

```python
boolean_policy_input: GoogleFolderOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `list_policy_input`<sup>Optional</sup> <a name="list_policy_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicyInput"></a>

```python
list_policy_input: GoogleFolderOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

---

##### `restore_policy_input`<sup>Optional</sup> <a name="restore_policy_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicyInput"></a>

```python
restore_policy_input: GoogleFolderOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleFolderOrganizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFolderOrganizationPolicyBooleanPolicy <a name="GoogleFolderOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy(
  enforced: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#enforced GoogleFolderOrganizationPolicy#enforced}

---

### GoogleFolderOrganizationPolicyConfig <a name="GoogleFolderOrganizationPolicyConfig" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  constraint: str,
  folder: str,
  boolean_policy: GoogleFolderOrganizationPolicyBooleanPolicy = None,
  id: str = None,
  list_policy: GoogleFolderOrganizationPolicyListPolicy = None,
  restore_policy: GoogleFolderOrganizationPolicyRestorePolicy = None,
  timeouts: GoogleFolderOrganizationPolicyTimeouts = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.folder">folder</a></code> | <code>str</code> | The resource name of the folder to set the policy for. Its format is folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#constraint GoogleFolderOrganizationPolicy#constraint}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The resource name of the folder to set the policy for. Its format is folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#folder GoogleFolderOrganizationPolicy#folder}

---

##### `boolean_policy`<sup>Optional</sup> <a name="boolean_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.booleanPolicy"></a>

```python
boolean_policy: GoogleFolderOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#boolean_policy GoogleFolderOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `list_policy`<sup>Optional</sup> <a name="list_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.listPolicy"></a>

```python
list_policy: GoogleFolderOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#list_policy GoogleFolderOrganizationPolicy#list_policy}

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.restorePolicy"></a>

```python
restore_policy: GoogleFolderOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#restore_policy GoogleFolderOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleFolderOrganizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#timeouts GoogleFolderOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#version GoogleFolderOrganizationPolicy#version}

---

### GoogleFolderOrganizationPolicyListPolicy <a name="GoogleFolderOrganizationPolicyListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy(
  allow: GoogleFolderOrganizationPolicyListPolicyAllow = None,
  deny: GoogleFolderOrganizationPolicyListPolicyDeny = None,
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  suggested_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.suggestedValue">suggested_value</a></code> | <code>str</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.allow"></a>

```python
allow: GoogleFolderOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#allow GoogleFolderOrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.deny"></a>

```python
deny: GoogleFolderOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#deny GoogleFolderOrganizationPolicy#deny}

---

##### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#inherit_from_parent GoogleFolderOrganizationPolicy#inherit_from_parent}

---

##### `suggested_value`<sup>Optional</sup> <a name="suggested_value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.suggestedValue"></a>

```python
suggested_value: str
```

- *Type:* str

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#suggested_value GoogleFolderOrganizationPolicy#suggested_value}

---

### GoogleFolderOrganizationPolicyListPolicyAllow <a name="GoogleFolderOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>typing.List[str]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#all GoogleFolderOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#values GoogleFolderOrganizationPolicy#values}

---

### GoogleFolderOrganizationPolicyListPolicyDeny <a name="GoogleFolderOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>typing.List[str]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#all GoogleFolderOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#values GoogleFolderOrganizationPolicy#values}

---

### GoogleFolderOrganizationPolicyRestorePolicy <a name="GoogleFolderOrganizationPolicyRestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy(
  default: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#default GoogleFolderOrganizationPolicy#default}

---

### GoogleFolderOrganizationPolicyTimeouts <a name="GoogleFolderOrganizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#create GoogleFolderOrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#delete GoogleFolderOrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#read GoogleFolderOrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#update GoogleFolderOrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#create GoogleFolderOrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#delete GoogleFolderOrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#read GoogleFolderOrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#update GoogleFolderOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFolderOrganizationPolicyBooleanPolicyOutputReference <a name="GoogleFolderOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforced_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforced_input`<sup>Optional</sup> <a name="enforced_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```python
enforced_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFolderOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

---


### GoogleFolderOrganizationPolicyListPolicyAllowOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFolderOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

---


### GoogleFolderOrganizationPolicyListPolicyDenyOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFolderOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

---


### GoogleFolderOrganizationPolicyListPolicyOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow">put_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny">put_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetDeny">reset_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">reset_inherit_from_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">reset_suggested_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allow` <a name="put_allow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```python
def put_allow(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow.parameter.all"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#all GoogleFolderOrganizationPolicy#all}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow.parameter.values"></a>

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#values GoogleFolderOrganizationPolicy#values}

---

##### `put_deny` <a name="put_deny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```python
def put_deny(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny.parameter.all"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#all GoogleFolderOrganizationPolicy#all}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny.parameter.values"></a>

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_folder_organization_policy#values GoogleFolderOrganizationPolicy#values}

---

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_deny` <a name="reset_deny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```python
def reset_deny() -> None
```

##### `reset_inherit_from_parent` <a name="reset_inherit_from_parent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```python
def reset_inherit_from_parent() -> None
```

##### `reset_suggested_value` <a name="reset_suggested_value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```python
def reset_suggested_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference">GoogleFolderOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference">GoogleFolderOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allowInput">allow_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.denyInput">deny_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inherit_from_parent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggested_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggested_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```python
allow: GoogleFolderOrganizationPolicyListPolicyAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference">GoogleFolderOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```python
deny: GoogleFolderOrganizationPolicyListPolicyDenyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference">GoogleFolderOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```python
allow_input: GoogleFolderOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

---

##### `deny_input`<sup>Optional</sup> <a name="deny_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```python
deny_input: GoogleFolderOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

---

##### `inherit_from_parent_input`<sup>Optional</sup> <a name="inherit_from_parent_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```python
inherit_from_parent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suggested_value_input`<sup>Optional</sup> <a name="suggested_value_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```python
suggested_value_input: str
```

- *Type:* str

---

##### `inherit_from_parent`<sup>Required</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suggested_value`<sup>Required</sup> <a name="suggested_value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```python
suggested_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFolderOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

---


### GoogleFolderOrganizationPolicyRestorePolicyOutputReference <a name="GoogleFolderOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFolderOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

---


### GoogleFolderOrganizationPolicyTimeoutsOutputReference <a name="GoogleFolderOrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_folder_organization_policy

googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleFolderOrganizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>]

---



