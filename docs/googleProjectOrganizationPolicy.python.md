# `googleProjectOrganizationPolicy` Submodule <a name="`googleProjectOrganizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProjectOrganizationPolicy <a name="GoogleProjectOrganizationPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy google_project_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy(
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
  project: str,
  boolean_policy: GoogleProjectOrganizationPolicyBooleanPolicy = None,
  id: str = None,
  list_policy: GoogleProjectOrganizationPolicyListPolicy = None,
  restore_policy: GoogleProjectOrganizationPolicyRestorePolicy = None,
  timeouts: GoogleProjectOrganizationPolicyTimeouts = None,
  version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | The project ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#id GoogleProjectOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the Policy. Default version is 0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.constraint"></a>

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#constraint GoogleProjectOrganizationPolicy#constraint}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.project"></a>

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#project GoogleProjectOrganizationPolicy#project}

---

##### `boolean_policy`<sup>Optional</sup> <a name="boolean_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.booleanPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#boolean_policy GoogleProjectOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#id GoogleProjectOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `list_policy`<sup>Optional</sup> <a name="list_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.listPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#list_policy GoogleProjectOrganizationPolicy#list_policy}

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.restorePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#restore_policy GoogleProjectOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#timeouts GoogleProjectOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#version GoogleProjectOrganizationPolicy#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putBooleanPolicy">put_boolean_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy">put_list_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putRestorePolicy">put_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetBooleanPolicy">reset_boolean_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetListPolicy">reset_list_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetRestorePolicy">reset_restore_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_boolean_policy` <a name="put_boolean_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putBooleanPolicy"></a>

```python
def put_boolean_policy(
  enforced: typing.Union[bool, IResolvable]
) -> None
```

###### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putBooleanPolicy.parameter.enforced"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#enforced GoogleProjectOrganizationPolicy#enforced}

---

##### `put_list_policy` <a name="put_list_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy"></a>

```python
def put_list_policy(
  allow: GoogleProjectOrganizationPolicyListPolicyAllow = None,
  deny: GoogleProjectOrganizationPolicyListPolicyDeny = None,
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  suggested_value: str = None
) -> None
```

###### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy.parameter.allow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#allow GoogleProjectOrganizationPolicy#allow}

---

###### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy.parameter.deny"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#deny GoogleProjectOrganizationPolicy#deny}

---

###### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy.parameter.inheritFromParent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#inherit_from_parent GoogleProjectOrganizationPolicy#inherit_from_parent}

---

###### `suggested_value`<sup>Optional</sup> <a name="suggested_value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putListPolicy.parameter.suggestedValue"></a>

- *Type:* str

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#suggested_value GoogleProjectOrganizationPolicy#suggested_value}

---

##### `put_restore_policy` <a name="put_restore_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putRestorePolicy"></a>

```python
def put_restore_policy(
  default: typing.Union[bool, IResolvable]
) -> None
```

###### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putRestorePolicy.parameter.default"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#default GoogleProjectOrganizationPolicy#default}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#create GoogleProjectOrganizationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#delete GoogleProjectOrganizationPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#read GoogleProjectOrganizationPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#update GoogleProjectOrganizationPolicy#update}.

---

##### `reset_boolean_policy` <a name="reset_boolean_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetBooleanPolicy"></a>

```python
def reset_boolean_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_list_policy` <a name="reset_list_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetListPolicy"></a>

```python
def reset_list_policy() -> None
```

##### `reset_restore_policy` <a name="reset_restore_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetRestorePolicy"></a>

```python
def reset_restore_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleProjectOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleProjectOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleProjectOrganizationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleProjectOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleProjectOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference">GoogleProjectOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference">GoogleProjectOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference">GoogleProjectOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference">GoogleProjectOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicyInput">boolean_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraintInput">constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicyInput">list_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicyInput">restore_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraint">constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `boolean_policy`<sup>Required</sup> <a name="boolean_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicy"></a>

```python
boolean_policy: GoogleProjectOrganizationPolicyBooleanPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference">GoogleProjectOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `list_policy`<sup>Required</sup> <a name="list_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicy"></a>

```python
list_policy: GoogleProjectOrganizationPolicyListPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference">GoogleProjectOrganizationPolicyListPolicyOutputReference</a>

---

##### `restore_policy`<sup>Required</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicy"></a>

```python
restore_policy: GoogleProjectOrganizationPolicyRestorePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference">GoogleProjectOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeouts"></a>

```python
timeouts: GoogleProjectOrganizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference">GoogleProjectOrganizationPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `boolean_policy_input`<sup>Optional</sup> <a name="boolean_policy_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.booleanPolicyInput"></a>

```python
boolean_policy_input: GoogleProjectOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraintInput"></a>

```python
constraint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `list_policy_input`<sup>Optional</sup> <a name="list_policy_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.listPolicyInput"></a>

```python
list_policy_input: GoogleProjectOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `restore_policy_input`<sup>Optional</sup> <a name="restore_policy_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.restorePolicyInput"></a>

```python
restore_policy_input: GoogleProjectOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleProjectOrganizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProjectOrganizationPolicyBooleanPolicy <a name="GoogleProjectOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy(
  enforced: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#enforced GoogleProjectOrganizationPolicy#enforced}

---

### GoogleProjectOrganizationPolicyConfig <a name="GoogleProjectOrganizationPolicyConfig" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  constraint: str,
  project: str,
  boolean_policy: GoogleProjectOrganizationPolicyBooleanPolicy = None,
  id: str = None,
  list_policy: GoogleProjectOrganizationPolicyListPolicy = None,
  restore_policy: GoogleProjectOrganizationPolicyRestorePolicy = None,
  timeouts: GoogleProjectOrganizationPolicyTimeouts = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.constraint">constraint</a></code> | <code>str</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.project">project</a></code> | <code>str</code> | The project ID. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.booleanPolicy">boolean_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#id GoogleProjectOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.listPolicy">list_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.restorePolicy">restore_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Version of the Policy. Default version is 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.constraint"></a>

```python
constraint: str
```

- *Type:* str

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#constraint GoogleProjectOrganizationPolicy#constraint}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#project GoogleProjectOrganizationPolicy#project}

---

##### `boolean_policy`<sup>Optional</sup> <a name="boolean_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.booleanPolicy"></a>

```python
boolean_policy: GoogleProjectOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#boolean_policy GoogleProjectOrganizationPolicy#boolean_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#id GoogleProjectOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `list_policy`<sup>Optional</sup> <a name="list_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.listPolicy"></a>

```python
list_policy: GoogleProjectOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#list_policy GoogleProjectOrganizationPolicy#list_policy}

---

##### `restore_policy`<sup>Optional</sup> <a name="restore_policy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.restorePolicy"></a>

```python
restore_policy: GoogleProjectOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#restore_policy GoogleProjectOrganizationPolicy#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleProjectOrganizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#timeouts GoogleProjectOrganizationPolicy#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#version GoogleProjectOrganizationPolicy#version}

---

### GoogleProjectOrganizationPolicyListPolicy <a name="GoogleProjectOrganizationPolicyListPolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy(
  allow: GoogleProjectOrganizationPolicyListPolicyAllow = None,
  deny: GoogleProjectOrganizationPolicyListPolicyDeny = None,
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  suggested_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.suggestedValue">suggested_value</a></code> | <code>str</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.allow"></a>

```python
allow: GoogleProjectOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#allow GoogleProjectOrganizationPolicy#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.deny"></a>

```python
deny: GoogleProjectOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#deny GoogleProjectOrganizationPolicy#deny}

---

##### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#inherit_from_parent GoogleProjectOrganizationPolicy#inherit_from_parent}

---

##### `suggested_value`<sup>Optional</sup> <a name="suggested_value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy.property.suggestedValue"></a>

```python
suggested_value: str
```

- *Type:* str

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#suggested_value GoogleProjectOrganizationPolicy#suggested_value}

---

### GoogleProjectOrganizationPolicyListPolicyAllow <a name="GoogleProjectOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.values">values</a></code> | <code>typing.List[str]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#all GoogleProjectOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#values GoogleProjectOrganizationPolicy#values}

---

### GoogleProjectOrganizationPolicyListPolicyDeny <a name="GoogleProjectOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.values">values</a></code> | <code>typing.List[str]</code> | The policy can define specific values that are allowed or denied. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#all GoogleProjectOrganizationPolicy#all}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#values GoogleProjectOrganizationPolicy#values}

---

### GoogleProjectOrganizationPolicyRestorePolicy <a name="GoogleProjectOrganizationPolicyRestorePolicy" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy(
  default: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#default GoogleProjectOrganizationPolicy#default}

---

### GoogleProjectOrganizationPolicyTimeouts <a name="GoogleProjectOrganizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#create GoogleProjectOrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#delete GoogleProjectOrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#read GoogleProjectOrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#update GoogleProjectOrganizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#create GoogleProjectOrganizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#delete GoogleProjectOrganizationPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#read GoogleProjectOrganizationPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#update GoogleProjectOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleProjectOrganizationPolicyBooleanPolicyOutputReference <a name="GoogleProjectOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">enforced_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced">enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforced_input`<sup>Optional</sup> <a name="enforced_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```python
enforced_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```python
enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleProjectOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyBooleanPolicy">GoogleProjectOrganizationPolicyBooleanPolicy</a>

---


### GoogleProjectOrganizationPolicyListPolicyAllowOutputReference <a name="GoogleProjectOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```python
internal_value: GoogleProjectOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

---


### GoogleProjectOrganizationPolicyListPolicyDenyOutputReference <a name="GoogleProjectOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all` <a name="reset_all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleProjectOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

---


### GoogleProjectOrganizationPolicyListPolicyOutputReference <a name="GoogleProjectOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putAllow">put_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putDeny">put_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetDeny">reset_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">reset_inherit_from_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">reset_suggested_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allow` <a name="put_allow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```python
def put_allow(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putAllow.parameter.all"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#all GoogleProjectOrganizationPolicy#all}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putAllow.parameter.values"></a>

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#values GoogleProjectOrganizationPolicy#values}

---

##### `put_deny` <a name="put_deny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```python
def put_deny(
  all: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putDeny.parameter.all"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#all GoogleProjectOrganizationPolicy#all}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.putDeny.parameter.values"></a>

- *Type:* typing.List[str]

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_project_organization_policy#values GoogleProjectOrganizationPolicy#values}

---

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_deny` <a name="reset_deny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```python
def reset_deny() -> None
```

##### `reset_inherit_from_parent` <a name="reset_inherit_from_parent" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```python
def reset_inherit_from_parent() -> None
```

##### `reset_suggested_value` <a name="reset_suggested_value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```python
def reset_suggested_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference">GoogleProjectOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference">GoogleProjectOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allowInput">allow_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.denyInput">deny_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">inherit_from_parent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">suggested_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue">suggested_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```python
allow: GoogleProjectOrganizationPolicyListPolicyAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllowOutputReference">GoogleProjectOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```python
deny: GoogleProjectOrganizationPolicyListPolicyDenyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDenyOutputReference">GoogleProjectOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```python
allow_input: GoogleProjectOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyAllow">GoogleProjectOrganizationPolicyListPolicyAllow</a>

---

##### `deny_input`<sup>Optional</sup> <a name="deny_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```python
deny_input: GoogleProjectOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyDeny">GoogleProjectOrganizationPolicyListPolicyDeny</a>

---

##### `inherit_from_parent_input`<sup>Optional</sup> <a name="inherit_from_parent_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```python
inherit_from_parent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suggested_value_input`<sup>Optional</sup> <a name="suggested_value_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```python
suggested_value_input: str
```

- *Type:* str

---

##### `inherit_from_parent`<sup>Required</sup> <a name="inherit_from_parent" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suggested_value`<sup>Required</sup> <a name="suggested_value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```python
suggested_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleProjectOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyListPolicy">GoogleProjectOrganizationPolicyListPolicy</a>

---


### GoogleProjectOrganizationPolicyRestorePolicyOutputReference <a name="GoogleProjectOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.default">default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```python
default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleProjectOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyRestorePolicy">GoogleProjectOrganizationPolicyRestorePolicy</a>

---


### GoogleProjectOrganizationPolicyTimeoutsOutputReference <a name="GoogleProjectOrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_project_organization_policy

googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleProjectOrganizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleProjectOrganizationPolicy.GoogleProjectOrganizationPolicyTimeouts">GoogleProjectOrganizationPolicyTimeouts</a>]

---



